window.addEventListener('DOMContentLoaded', () => {
    // Timer
    const timer = (idSelector, deadline) => {

        const getTimeRemaining = endTime => {
            const timeDifference = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((timeDifference / 1000) % 60),
                minutes = Math.floor((timeDifference / 1000 / 60) % 60),
                hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);

            return {
                'total': timeDifference,
                seconds,
                minutes,
                hours
            };
        };

        const addZero = num => {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        };

        const setClock = (selector, endTime) => {
            const timer = document.querySelector(selector),
                hours = timer.querySelector('#timer-hours'),
                minutes = timer.querySelector('#timer-minutes'),
                seconds = timer.querySelector('#timer-seconds'),
                timeInterval = setInterval(updateClock, 1000);

            updateClock(); // Stops blinking layout (Мигание верстки) when update the page

            function updateClock() {
                const remainingTime = getTimeRemaining(endTime);

                hours.textContent = addZero(remainingTime.hours);
                minutes.textContent = addZero(remainingTime.minutes);
                seconds.textContent = addZero(remainingTime.seconds);

                if (remainingTime.total <= 0) {
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';

                    clearInterval(timeInterval);
                }
            }
        };

        setClock(idSelector, deadline);
    };

    timer('#timer', '2021-08-29');

    // Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        document.addEventListener('click', event => {
            const target = event.target;

            if (target === closeBtn || target.closest('menu>ul')) {
                handlerMenu();
            } else if (target.closest('.menu')) {
                handlerMenu();
            } else if (target !== menu) {
                menu.classList.remove('active-menu');
            }
        });
    };

    toggleMenu();

    //Modals
    const modals = (triggerBtnSelector, modalSelector, modalContentSelector, closeBtnSelector) => {
        const triggerBtn = document.querySelectorAll(triggerBtnSelector),
            modal = document.querySelector(modalSelector),
            modalContent = document.querySelector(modalContentSelector),
            closeBtn = document.querySelector(closeBtnSelector);

        const openModal = () => {
            modal.style.display = 'block';
            modalContent.style.position.left = '50%';
            document.body.style.overflow = 'hidden';
        };

        function animate({
            timing,
            draw,
            duration
        }) {
            const start = performance.now();

            requestAnimationFrame(function animate(time) {
                // timeFraction изменяется от 0 до 1
                let timeFraction = (time - start) / duration;
                if (timeFraction > 1) {
                    timeFraction = 1;
                }

                // вычисление текущего состояния анимации
                const progress = timing(timeFraction);

                draw(progress); // отрисовать её

                if (timeFraction < 1) {
                    requestAnimationFrame(animate);
                }
            });
        }

        triggerBtn.forEach(trigger => {
            trigger.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }

                openModal();

                if (window.innerWidth > 768) {
                    animate({
                        duration: 500,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            modal.style.opacity = progress;
                        }
                    });
                    modal.style.visibility = 'visible';
                }
            });
        });

        const closeModal = () => {
            modal.style.display = 'none';
            modalContent.style.position.left = '-50%';
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', () => {
            document.body.style.overflow = '';
            if (window.innerWidth > 768) {
                window.setTimeout(() => modal.style.visibility = 'hidden', 500);
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = 1 - progress;
                    }
                });

            } else {
                closeModal();
            }
        });

        //При клике на подложку - исчезаeт.
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                closeModal();
            }
        });
    };

    modals('.popup-btn', '.popup', '.popup-content', '.popup-close');

    // Tabs
    const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
        const tabHeader = document.querySelector(headerSelector),
            tabs = document.querySelectorAll(tabSelector),
            tabContents = document.querySelectorAll(contentSelector);

        const hideTabContent = () => {
            tabContents.forEach(tabContent => tabContent.style.display = 'none');

            tabs.forEach(tab => tab.classList.remove(activeClass));
        };

        const showTabContent = (i = 0) => {
            tabContents[i].style.display = 'flex';
            tabs[i].classList.add(activeClass);
        };

        hideTabContent();
        showTabContent();

        tabHeader.addEventListener('click', e => {
            const target = e.target;

            if (target && target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
                tabs.forEach((tab, i) => {
                    if (target === tab || target.parentNode === tab) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    };

    tabs('.service-header', '.service-header-tab', '.service-tab', 'active');

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            allDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const addDots = () => {
            slide.forEach(() => {
                const li = document.createElement('li');
                li.classList.add('dot');
                allDots.append(li);
            });
        };

        addDots();

        const dot = document.querySelectorAll('.dot');

        const prevSlide = (element, index, strClass) => {
            element[index].classList.remove(strClass);
        };

        const nextSlide = (element, index, strClass) => {
            element[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        // Переключение слайдов по нажатию кнопки или точки
        slider.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };

    slider();

    // Change image
    const changeImage = () => {
        const commandPhoto = document.querySelectorAll('.command__photo');

        commandPhoto.forEach(photo => {
            photo.addEventListener('mouseover', event => {
                [event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
            });
        });

        commandPhoto.forEach(photo => {
            photo.addEventListener('mouseout', event => {
                [event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img];
            });
        });
    };

    changeImage();

    // Calculator
    const calculator = (parentCalc, typeCalc, squareCalc, countCalc, dayCalc, totalValue, price = 100) => {
        const calcBlock = document.querySelector(parentCalc),
            calcType = document.querySelector(typeCalc),
            calcSquare = document.querySelector(squareCalc),
            calcCount = document.querySelector(countCalc),
            calcDay = document.querySelector(dayCalc),
            calcTotalValue = document.querySelector(totalValue);

        // Calc validation
        const validateCalc = selector => {
            const input = document.querySelector(selector);

            input.addEventListener('input', () => {
                //const target = e.target;

                // if (target.matches('[type="text"]')) {
                //     target.value = target.value.replace(/\D/g, '');
                // }

                if (input.value.match(/\D/g)) {
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '1px solid #19b5fe';
                }
            });
        };

        validateCalc('.calc-square');
        validateCalc('.calc-count');
        validateCalc('.calc-day');

        const countSum = () => {
            let total = 0,
                calcCountValue = 1,
                calcDayValue = 1;

            const calcTypeValue = calcType.options[calcType.selectedIndex].value,
                calcSquareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                calcCountValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                calcDayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                calcDayValue *= 1.5;
            }

            if (calcTypeValue && calcSquareValue) {
                total = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

                let countSumId,
                    count = 0;
                const countSum = () => {
                    countSumId = requestAnimationFrame(countSum);
                    count += total / 20;
                    if (count < total) {
                        calcTotalValue.textContent = Math.round(count);
                    } else {
                        cancelAnimationFrame(countSumId);
                        calcTotalValue.textContent = total;
                        count = 0;
                    }
                };

                countSumId = requestAnimationFrame(countSum);
            }
        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;

            if (target && target === calcType || target === calcSquare ||
                target === calcCount || target === calcDay) {
                countSum();
            }
        });
    };

    calculator('.calc-block', '.calc-type', '.calc-square', '.calc-count', '.calc-day', '#total', 100);

    // SendForm

    const sendForm = () => {
        const forms = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('[data-input="input"]'),
            tel = document.querySelector('[type="tel"]'),
            email = document.querySelector('[type="email"]'),
            name = document.querySelector('[type="text"]'),
            text = document.querySelector('[placeholder="Ваше сообщение"]');

        tel.addEventListener('input', e => {
            const target = e.target;
            target.value = target.value.replace(/[^+0-9]/g, '');
        });

        email.addEventListener('input', e => {
            const target = e.target;
            target.value = target.value.replace(/[^@a-zA-Z0-9.-_]/g, '');
        });

        name.addEventListener('input', e => {
            const target = e.target;
            target.value = target.value.replace(/[^а-яА-Я ]/g, '');
        });

        if (text) {
            text.addEventListener('input', e => {
                const target = e.target;
                target.value = target.value.replace(/[^а-яА-Я0-9 ,.!]/g, '');
            });
        }

        const message = {
            loading: 'images/form/spinner.svg',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };

        const clearInputs = () => {
            inputs.forEach(input => {
                input.value = '';
            });
        };

        const postData = async(url, data) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application-json'
                },
                body: data
            });

            return await res.json();
        };

        const bindPostData = form => {
            form.addEventListener('submit', event => {
                event.preventDefault();

                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;

                form.append(statusMessage);

                const formData = new FormData(form);

                const json = JSON.stringify(Object.fromEntries(formData.entries()));

                postData('server.php', json)
                    .then(data => {
                        console.log(data);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearInputs();
                        statusMessage.remove();
                    });
            });
        };

        forms.forEach(form => {
            bindPostData(form);
        });
    };

    sendForm();

});
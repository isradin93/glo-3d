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

export default modals;
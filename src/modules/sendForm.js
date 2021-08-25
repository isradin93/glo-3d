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

    // eslint-disable-next-line space-before-function-paren
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

export default sendForm;
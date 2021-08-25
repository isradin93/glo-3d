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

export default tabs;
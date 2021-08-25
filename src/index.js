import timer from './modules/timer';
import toggleMenu from './modules/toggleMenu';
import modals from './modules/modals';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImage from './modules/changeImage';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

window.addEventListener('DOMContentLoaded', () => {

    // Timer
    timer('#timer', '2021-08-29');
    // Menu
    toggleMenu();
    //Modals
    modals('.popup-btn', '.popup', '.popup-content', '.popup-close');
    // Tabs
    tabs('.service-header', '.service-header-tab', '.service-tab', 'active');
    slider();
    // Change image
    changeImage();
    // Calculator
    calculator('.calc-block', '.calc-type', '.calc-square', '.calc-count', '.calc-day', '#total', 100);
    // SendForm
    sendForm();
});
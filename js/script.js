import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider'; 
import timer from './modules/timer';
import calc from './modules/calc';  
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    forms('form', modalTimerId);
    slider({
        container:'.offer__slider',
        nextArrow:'.offer__slider-next',
        prevArrow:'.offer__slider-prev',
        totalCounter:'#total',
        slide:'.offer__slide',
        currentCounter:'#current',
        wrapper: '.offer__slider-wrapper',
        field:'.offer__slider-inner'
    });
    timer('.timer', '2021-12-12');
    calc();
    
})
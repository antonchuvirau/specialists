'use strict';

function onAccountNotificationsOpenButtonClickHandler(evt) {
    const target = evt.target;
    target.nextElementSibling.classList.toggle(`account-link__notifications_is-opened`);
}

function onDocumentClickHandler(evt) {
    const target = evt.target;

    if (target.matches(`.b-select__header-button`)) {
        target.parentElement.nextElementSibling.classList.toggle(`b-select__wrapper_open`);
    }
    if (target.matches(`.b-select__list-button`)) {
        const targetSubListElement = target.nextElementSibling;
        target.classList.toggle(`b-select__list-button_active`);
        if (targetSubListElement) {
            targetSubListElement.classList.toggle(`b-select__sub-list_open`);
        }
    }
}

document.addEventListener(`DOMContentLoaded`, () => {
    // VARIABLES
    const accountNotificationsOpenButton = document.querySelector(`.account-link__value`);
    // EVENTS
    if (accountNotificationsOpenButton) {
        accountNotificationsOpenButton.addEventListener(`click`, onAccountNotificationsOpenButtonClickHandler);
    }
});

document.addEventListener(`click`, onDocumentClickHandler);

// JQUERY
jQuery(document).ready(function() {
    jQuery('[data-modal]').on('click', function() {
        jQuery(jQuery(this).data('modal')).modal();
        return false;
    });
});
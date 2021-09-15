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
    if (target.matches(`.faq-box__list-item-title`)) {
        target.classList.toggle(`faq-box__list-item-title_active`);
    }
    if (target.matches(`.subscription-personal-data__list-edit-btn`)) {
        target.classList.toggle(`subscription-personal-data__list-edit-btn_is-disabled`);
        target.parentElement.querySelector(`.subscription-personal-data__list-input`).classList.remove(`subscription-personal-data__list-input_is-disabled`);
        target.parentElement.querySelector(`.subscription-personal-data__list-save-btn`).classList.remove(`subscription-personal-data__list-save-btn_is-disabled`);
    }
    if (target.matches(`.subscription-personal-data__list-save-btn`)) {
        target.classList.toggle(`subscription-personal-data__list-save-btn_is-disabled`);
        target.parentElement.querySelector(`.subscription-personal-data__list-input`).classList.add(`subscription-personal-data__list-input_is-disabled`);
        target.parentElement.querySelector(`.subscription-personal-data__list-edit-btn`).classList.remove(`subscription-personal-data__list-edit-btn_is-disabled`);
    }
    if (target.matches(`.b-catalog-box__list-link`)) {
        const targetSubElement = target.nextElementSibling;
        target.classList.toggle(`b-catalog-box__list-link_is-active`);
        if (targetSubElement) {
            if (targetSubElement.classList.contains(`b-catalog-box__sub-list`)) {
                targetSubElement.classList.toggle(`b-catalog-box__sub-list_is-opened`);
            }
            else if (targetSubElement.classList.contains(`b-catalog-box__dropdown-list`)) {
                targetSubElement.classList.toggle(`b-catalog-box__dropdown-list_is-opened`);
            }
        }
    }
    if (target.matches(`.b-catalog-box__dropdown-list-link`)) {
        const targetSubElement = target.nextElementSibling;
        target.classList.toggle(`b-catalog-box__dropdown-list-link_is-active`);
        if (targetSubElement) {
            if (targetSubElement.classList.contains(`b-catalog-box__sub-list`)) {
                targetSubElement.classList.toggle(`b-catalog-box__sub-list_is-opened`);
            }
            else if (targetSubElement.classList.contains(`b-catalog-box__dropdown-list`)) {
                targetSubElement.classList.toggle(`b-catalog-box__dropdown-list_is-opened`);
            }
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
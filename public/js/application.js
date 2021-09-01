
'use strict';

function onAccountNotificationsOpenButtonClickHandler(evt) {
    const target = evt.target;
    target.nextElementSibling.classList.toggle(`account-link__notifications_is-opened`);
}

document.addEventListener(`DOMContentLoaded`, () => {
    // VARIABLES
    const accountNotificationsOpenButton = document.querySelector(`.account-link__value`);
    // EVENTS
    accountNotificationsOpenButton.addEventListener(`click`, onAccountNotificationsOpenButtonClickHandler);
});
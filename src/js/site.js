import { helpers, classes } from 'pk-utilities';

function init () {
  const alert = '[data-component="pk-alert"]';
  const confirm = '[data-role="dismiss-pk-alert"]';
  const cookiename = document.querySelector(alert).dataset.name;
  const confirmed = hasCookie(document.cookie, cookiename);
  let i;
  if (!confirmed) {
    for (i = 0; i < document.querySelectorAll(alert).length; ++i) {
      helpers.addClass(document.querySelectorAll(alert)[i], classes.active);
    }
  }
  for (i = 0; i < document.querySelectorAll(confirm).length; ++i) {
    const button = document.querySelectorAll(confirm)[i];
    const scopedAlert = helpers.closest(button, alert);
    button.addEventListener('click', function () {
      createCookie(cookiename, true);
      helpers.removeClass(scopedAlert, classes.active);
    });
  }
};

function hasCookie (cookies, name) {
  return cookies.indexOf(name) >= 0;
}

function createCookie (name, value, exp) {
  document.cookie = `${name}=${value}; expires=${exp}`;
}

init();

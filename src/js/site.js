import { helpers, classes } from 'pk-utilities';

function init () {
  const alert = '[data-component="pk-alert"]';
  const confirm = '[data-role="dismiss-pk-alert"]';
  let i;
  for (i = 0; i < document.querySelectorAll(alert).length; ++i) {
    helpers.addClass(document.querySelectorAll(alert)[i], classes.active);
  }
  for (i = 0; i < document.querySelectorAll(confirm).length; ++i) {
    const button = document.querySelectorAll(confirm)[i];
    const scopedAlert = helpers.closest(button, alert);
    button.addEventListener('click', function () {
      helpers.removeClass(scopedAlert, classes.active);
    });
  }
};

init();

function init () {
  console.log('this works');
  apos.define('pk-cookie-alert-widgets', {
    extend: 'apostrophe-widgets',
    construct: function (self, options) {
      self.play = function ($widget, data, options) {
        console.log('this doesn\'t work');
      };
    }
  });
};

init();

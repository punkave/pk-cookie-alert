module.exports = {
  extend: 'apostrophe-widgets',
  name: 'pk-cookie-alert',
  label: 'Alert',
  skipInitialModal: true,
  construct: (self, options) => {
    self.prependWidget = () => {
      self.apos.templates.prepend('body', (req) => {
        return self.partial(self.template, { widget: self.name, manager: self });
      });
    };
  },
  afterConstruct: (self) => {
    self.prependWidget();
  }
};

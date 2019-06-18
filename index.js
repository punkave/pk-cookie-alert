module.exports = {
  extend: 'apostrophe-module',
  moogBundle: {
    modules: [
      'pk-cookie-alert-global'
    ],
    directory: 'lib/modules'
  },
  construct: (self, options) => {
    self.prependAlert = () => {
      self.apos.templates.prepend('body', (req) => {
        return self.partial('alert');
      });
    };
  },
  afterConstruct: (self) => {
    self.prependAlert();
    self.pushAsset('script', 'always', { when: 'always' });
    self.pushAsset('stylesheet', 'always', { when: 'always' });
  }
};

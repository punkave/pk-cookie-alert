module.exports = {
  extend: 'apostrophe-module',
  moogBundle: {
    modules: [
      'pk-cookie-alert-global',
      'pk-cookie-alert-widgets'
    ],
    directory: 'lib/modules'
  },
  afterConstruct: (self) => {
    self.pushAsset('script', 'always', { when: 'always' });
    self.pushAsset('stylesheet', 'always', { when: 'always' });
  }
};

module.exports = {
  improve: 'apostrophe-global',
  construct: (self, options) => {
    const richTextConfig = options.richTextConfig || { toolbar: [ 'Bold', 'Link', 'Unlink' ] };
    const pkAlertFields = [
      {
        name: 'pkAlertText',
        label: 'Alert Text',
        type: 'singleton',
        widgetType: 'apostrophe-rich-text',
        options: richTextConfig
      },
      {
        name: 'pkAlertButton',
        label: 'Alert Button Text',
        type: 'string'
      },
      {
        name: 'pkAlertAlignment',
        label: 'Alert Box Alignment',
        type: 'select',
        choices: [
          {
            value: 'bottom',
            label: 'Bottom'
          },
          {
            value: 'top',
            label: 'Top'
          }
        ]
      }
    ];

    options.addFields = (options.addFields || []).concat(pkAlertFields);
    options.arrangeFields = (options.arrangeFields || []).concat([
      {
        name: 'pkAlertFields',
        label: 'Global Alert',
        fields: [
          'pkAlertText',
          'pkAlertButton',
          'pkAlertAlignment'
        ]
      }
    ]);
  }
};

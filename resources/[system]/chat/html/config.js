window.CONFIG = {
  defaultTemplateId: 'default', //This is the default template for 2 args1
  defaultAltTemplateId: 'defaultAlt', //This one for 1 arg
  templates: { //You can add static templates here
    'default': '<b>{0}</b>: {1}',
    'defaultAlt': '{0}',
    'example:important': '<h1>^2{0}</h1>'
  },
  fadeTimeout: 3500, //2000
  suggestionLimit: 5,
  style: {
    background: 'rgba(52, 73, 94, 0.8)',
    width: '38%',
    height: '240px',
  }
};

// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default:

module.exports = {
  stylesheets: [
    {
      name: 'site'
    }
  ],
  construct: function(self, options) {
    // modules
    self.scripts.push({ name: 'bootstrap/bootstrap', when: 'always' });
    self.scripts.push({ name: 'site', when: 'always' });
  }
};

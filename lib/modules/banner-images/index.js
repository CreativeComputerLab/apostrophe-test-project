// A subclass of `apostrophe-pieces`, `apostrophe-images` establishes a library
// of uploaded images in formats suitable for use on the web.
//
// Together with [apostrophe-images-widgets](../apostrophe-images-widgets/index.html),
// this module provides a simple way to add downloadable PDFs and the like to
// a website, and to manage a library of them for reuse.
//
// Each `apostrophe-image` doc has an `attachment` schema field, implemented
// by the [apostrophe-attachments](../apostrophe-attachments/index.html) module.

module.exports = {
  extend: 'apostrophe-pieces',
  name: 'banner-image',
  label: 'Banner Image',
  alias: 'banner-images',
  perPage: 20,
  manageViews: ['grid', 'list'],
  insertViaUpload: true,
  // Means not included in public sitewide search. -Tom
  searchable: false,
  addFields: [
    {
      type: 'slug',
      name: 'slug',
      label: 'Slug',
      prefix: 'image',
      required: true
    },
    {
      type: 'attachment',
      name: 'attachment',
      label: 'Image File',
      subtype: 'images',
      required: true
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      textarea: true
    },
    {
      type: 'string',
      name: 'credit',
      label: 'Credit'
    },
    {
      type: 'url',
      name: 'creditUrl',
      label: 'Credit URL'
    },
    {
      type: 'string',
      name: 'mainCaption',
      label: 'Main Caption'
    },
     {
      type: 'string',
      name: 'sub-caption',
      label: 'Sub Caption'
    },
    {
      type: 'string',
      name: 'buttonText',
      label: 'Button Text'
    }, 
{
  name: 'aspectRatio',
  label: 'Aspect Ratio',
  type: 'array',
  titleField: 'Aspect Ratio',
  schema: [
    {
      type: 'integer',
      name: 'width',
      label: 'Width'
    },
    {
      type: 'integer',
      name: 'height',
      label: 'Height'
    },
  ]
}



/*    
    {

      type: 'select',
      name: 'aspectRatio',
      label: 'Aspect Ratio',
      choices: [
        {
          label: '3:1',
          type: 'array',
          value: [3, 1]
        }

        ,
        {
          label: '2:1',
          value: [1, 1]
        },
        {
          label: '1:1',
          value: [1, 1]
        },
        {
          label: '1:2',
          value: [1, 2]
        },
         {
          label: '1:3',
          value: [1, 3]
        }

      ]
    }
 */   
  ],
  arrangeFields: [
    {
      name: 'basics',
      label: 'Basics',
      fields: [
        'attachment',
        'title',
        'slug',
        'aspectRatio',
        'published',
        'tags'
      ]
    },
    {
      name: 'info',
      label: 'Info',
      fields: [
        'description',
        'credit',
        'creditUrl'
      ]
    },
    {
      name: 'banner',
      label: 'Banner',
      fields: [
        'mainCaption',
        'sub-caption',
        'buttonText'
      ]
    }    
  ],

  construct: function(self, options) {
    self.pushAsset('script', 'chooser', { when: 'user' });
    self.pushAsset('script', 'relationship-editor', { when: 'user' });
    self.pushAsset('script', 'manager-modal', { when: 'user' });
    self.pushAsset('script', 'editor-modal', { when: 'user' });
    self.pushAsset('script', 'focal-point-editor', { when: 'user' });
    self.pushAsset('stylesheet', 'user', { when: 'user' });
    require('./lib/api.js')(self, options);
    self.enableHelpers();
  }
};

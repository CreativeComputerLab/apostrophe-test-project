module.exports = {
    extend: 'apostrophe-pieces',
    name: 'local-video-piece',
    label: 'Local Video Piece',

    addFields: [
        {
            name: 'filename',
            label: 'File',
            type: 'singleton',
            widgetType: 'apostrophe-files',
            options: {limit:1},
            contextualOnly: true
        },
        {
            name: 'poster',
            label: 'Poster',
            type: 'singleton',
            widgetType: 'apostrophe-images',
            options: {limit:1},
            contextualOnly: true
        }        
    ],

};
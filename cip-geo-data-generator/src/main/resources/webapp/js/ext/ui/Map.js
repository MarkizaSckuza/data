Ext.define("DataGenerator.ui.Map",{
    extend: 'Ext.container.Container',
    collapsible: false,
    region: 'center',
    id: 'map-control',
    minWidth: 100,
    html: '<div id="map-toolbar"></div><div id="map"></div>',
    listeners: {
        resize: {
            fn: function (sndr, width) {
                if (Ext.getCmp('map-toolbar')) {
                    Ext.getCmp('map-toolbar').setWidth(width);
                }
            }
        }
    }
});
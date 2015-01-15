Ext.define('DataGenerator.ui.jobs.JobForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.jobform',
    
    controller: 'job',
    
    title: 'New Job',
    width: 300,
    
    autoShow: true,
    
    initComponent: function () {
        var me = this;
        
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    height: 120,
                    buttons: [
                        { text: 'Save', action: 'save' },
                        { text: 'Close', handler: function () { me.close(); } }
                    ]
                }
            ]
        });
        
        me.callParent(arguments);
    }
});
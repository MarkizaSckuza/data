Ext.define("DataGenerator.ui.jobs.StepGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stepgrid',
    title: 'Steps',
    
    tbar: [
        {
            xtype: 'button',
            text: 'Create',
            action: 'create'
        },
        {
            xtype: 'button',
            text: 'Remove',
            action: 'remove'
        }
    ],
    
    initComponent: function () {
        var me = this,
            store = Ext.create('DataGenerator.store.jobs.Step');

        Ext.applyIf(me, {
            store: store,
            
            columns: [
                {
                    text: '#',
                    dataIndex: 'id'
                }
            ]
        });
        
        me.callParent(arguments);
    }
});

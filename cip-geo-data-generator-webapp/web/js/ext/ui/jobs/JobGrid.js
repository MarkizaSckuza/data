Ext.define('DataGenerator.ui.jobs.JobGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.jobgrid',
    title: 'Jobs',

    viewModel: 'jobviewmodel',

    bind: {
        store: '{jobs}'
    },
    
//    tbar: [
//        {
//            xtype: 'button',
//            text: 'Create',
//            action: 'create'
//        }
//    ],
    
    initComponent: function () {
        var me = this;
        
        Ext.applyIf(me, {
            columns: [
                {
                    text: 'fileNameToShow',
                    dataIndex: 'fileNameToShow',
                    flex: 1
                }
            ]
        });
        
        me.callParent(arguments);
    }
});

Ext.define("DataGenerator.ui.jobs.StepGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stepgrid',
    title: 'Steps',
    viewModel:{type:'jobs'},
    bind:{
        store: '{currentJob.steps}',
        selection:'{currentStep}'
    },
    //store: Ext.data.StoreManager.lookup('stepsStore'),
    tbar: [
        {
            xtype: 'button',
            text: 'Create',
            handler: function(){
                //TODO: update by POST function
            }
        }
    ],
    columns: [
        { text: '#',  dataIndex: 'id', width: 100 ,bind:'{currentStep.id}'},
        {
            xtype:'actioncolumn',
            width:24,
            items: [{
                icon: 'img/delete.png',
                tooltip: 'Delete'//,
           //     handler: function (grid, rowIndex, colIndex) {
           ////
           //         }


            }]
        }
    ]
});

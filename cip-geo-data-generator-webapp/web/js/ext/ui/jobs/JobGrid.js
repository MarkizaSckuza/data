Ext.define('DataGenerator.ui.jobs.JobGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.jobgrid',
    title: 'Jobs',
        
//    viewModel:{type:'jobs'},
//    bind:{
//        store:'{jobs}',
//        selection:'{currentJob}'
//    },

    
    tbar: [
        {
            xtype: 'button',
            text: 'Create',
            action: 'create'
        }
    ],

//    tbar: [
//        {
//            xtype: 'button',
//            text: 'Create',
//            handler: function() {
//                //if(!win) {
//                    var form = Ext.widget('form', {
//                        layout: {
//                            type: 'vbox',
//                            align: 'stretch'
//                        },
//                        border: false,
//                        bodyPadding: 10,
//                        fieldDefaults: {
//                            labelAlign: 'top',
//                            labelWidth: 100
//                        },
//                        items: [
//                            {
//                                xtype: 'textfield',
//                                fieldLabel: 'Job\'s file name',
//                                id: 'jobs_name_txt',
//                                name: 'jobs_name_txt_name',
//                                allowBlank: false
//                            }],
//                        buttons: [{
//                            text: 'Cancel',
//                            handler: function () {
//                                this.up('form').getForm().reset();
//                                this.up('window').hide();
//                            }
//                        }, {
//                            text: 'Submit',
//                            handler: function () {
//                                if (this.up('form').getForm().isValid()) {
//                                    // In a real application, this would submit the form to the configured url
//                                    var jobName = Ext.getCmp('jobs_name_txt').getValue();
//                                    this.up('form').getForm().reset();
//                                    this.up('window').close();
//                                    Ext.MessageBox.alert('Job was added.', 'New job ' + 'was added.');
//                                }
//                            }
//                        }]
//                    });
//                    win = Ext.widget('window', {
//                        title: 'Create new job',
//                        closeAction: 'hide',
//                        width: 300,
//                        height: 350,
//                        layout: 'fit',
//                        resizable: true,
//                        modal: true,
//                        items: form
//                    });
//                //}
//                win.show();
//            }
//        }
//    ],
    
//    columns: [
//        {
//            text: 'Jobs',
//            dataIndex: 'fileNameToShow',
//            width: 120,
//            bind: '{currentJob.fileNameToShow}'
//        }
//    ],
    
    initComponent: function () {
        var me = this,
            store = Ext.create('DataGenerator.store.jobs.Job');
        
        Ext.applyIf(me, {
            store: store,
            columns: [
                {
                    text: '#',
                    dataIndex: 'id',
                    width: 40
                },
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

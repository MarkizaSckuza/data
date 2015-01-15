Ext.define('DataGenerator.ui.jobs.LocationForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.locationform',
    
    padding: '0',

    layout: {
        type: 'vbox',
        anchor: '100%'
    },
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },
    viewModel : {
        type: 'outputviewmodel'
    },
    items: [
        {
                    xtype: 'fieldset',
                    title: 'Location Output parameters',
                    titeleCopy : 'Location Output parameters',
                    id: 'location-output-field-set',
                    margin: '10 10 10 10',
                    layout: 'anchor',
                    autoWidth: true,
                    stepSelected:-1,
                    jobSelected:-1,
                    flex: 1,
                    items:[
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Factory',
                            bind: '{record.factoryName}'
                        },
                        {
                            xtype: 'combobox',
                            name: 'Partition type:',
                            displayField: 'fileName',
                            fieldLabel: 'Location output :',
                            valueField: 'fileName',
                            editable: false,
                            value: 0,
                            store: Ext.data.StoreManager.lookup('locationOutputStore')
                        },
                        {
                            xtype: 'textfield',
                            bind: '{record.path}',
                            fieldLabel: 'Path:',
                            msgTarget: 'side',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            name: 'partition_type',
                            fieldLabel: 'Partition type:',
                            valueField: 'typeId',
                            editable: false,
                            value: 0,
                            store: [['0','First type'],['1','Second type']]
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Separator :',
                            allowBlank: false

                        },
                        {
                            xtype: 'checkbox',
                            boxLabel: 'Overwrite default separator',
                            id: 'LocationSeparatorCheckbox',
                            checked: true,
                            inputValue: 'overwrite',
                            flex: 1,
                            listeners: {
                                change: function (cb, checked) {
                                    if (checked) Ext.getCmp('LocationSeparatorTxt').disable();
                                    else Ext.getCmp('LocationSeparatorTxt').enable();
                                }
                            }
                        }
                    ],
                    clearTitle:function(){
                        this.setTitle(this.titeleCopy);
                    }
        }
    ]
});

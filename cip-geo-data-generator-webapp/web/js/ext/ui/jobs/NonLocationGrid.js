Ext.define('DataGenerator.ui.jobs.NonLocationGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.nonlocationgrid',
    title: 'Non Location outputs',

    initComponent: function() {
        this.columns = this.getColumns();
        this.initialConfig.columns = this.columns;
        this.callParent();

    },
    clearTitle:function(){
        this.setTitle(this.titeleCopy);
        nonLocationOutputForm.setTitle(nonLocationOutputForm.titleCopy);

    },
    getColumns: function(){
        return [
            {
                xtype: 'checkcolumn',
                text: 'Selected',
                dataIndex:'selected',
                listeners: {
                    checkChange:
                        function (column, rowIndex, checked, eOpts) {
                                if(checked) {
                                    //column = this.up('column').getNameOrId -1;
                                    //boxToLeft = column.down('row').rowIndex.getCheckBox;
                                    //boxToLeft.check;
                                    };
                                if(!checked) {
                                    //column = this.up('column').getNameOrId +1;
                                    //boxToRight = column.down('row').rowIndex.getCheckBox;
                                    //boxToLeft.uncheck;
                                }
                            }
                    }
            }
            ,
            { text: 'Factory',  dataIndex: 'factoryName', width: 400  //,
                //renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                //    if(record.data.selected){
                //        this.getView().select(rowIndex);
                //    }
                //    return value;
                //}
            }
        ]
    }
});

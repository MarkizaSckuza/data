Ext.define("DataGenerator.ui.jobs.ScenarioGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.scenariogrid',
    title: 'Scenarios ',

    initComponent: function() {
        this.columns = this.getColumns();
        this.callParent();

    },
    getColumns: function(){
        return [
            {
                xtype: 'checkcolumn',
                text: 'Selected',
                dataIndex:'selected'
            },
            { text: 'Scenario',  dataIndex: 'fileNameToShow', width: 400 }
        ]
    },
    clearTitle:function(){
        this.setTitle(this.titeleCopy);
    }

});

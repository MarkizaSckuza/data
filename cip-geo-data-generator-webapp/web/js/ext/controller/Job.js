Ext.define('DataGenerator.controller.Job', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.job',

    init: function () {
        var me = this;
        
        me.control({
            'jobgrid': {
                itemclick: me.onJobItemClick
            },
            'jobgrid button[action=create]': {
                click: me.onJobCreateClick
            },
            'jobform button[action=close]': {
                click: function () { }
            },
            'stepgrid': {
                itemclick: me.onStepItemClick
            },
            'stepgrid button[action=create]': {
                click: me.onStepCreateClick
            },
            'scenariogrid': {
                itemclick: me.onScenarioItemClick
            },
            'nonlocationgrid': {
                itemclick: me.onNonLocationItemClick
            }
        });
    },
    
    onJobItemClick: function (grid, record) {
        var me = this,
            stepGrid = me.lookupReference('stepGrid'),
            scenarioGrid = me.lookupReference('scenarioGrid'),
            nonLocationGrid = me.lookupReference('nonLocationGrid');
        
        stepGrid.reconfigure(record.steps());
        
        // @TODO: find out correct way to bind empty store
        scenarioGrid.reconfigure(Ext.create('Ext.data.Store'));
        nonLocationGrid.reconfigure(Ext.create('Ext.data.Store'));
    },
    
    onStepItemClick: function (grid, record) {
        var me = this,
            scenarioGrid = me.lookupReference('scenarioGrid'),
            nonLocationGrid = me.lookupReference('nonLocationGrid'),
            locationForm = me.lookupReference('locationForm'),
            
            locationBasedOutput = record.getLocationBasedOutput();
        
        scenarioGrid.reconfigure(record.scenarios());
        nonLocationGrid.reconfigure(record.outputs());
        
        if (locationBasedOutput) {
            locationForm.getViewModel().setData({ record: record.getLocationBasedOutput() });
        }
    },
    
    onScenarioItemClick: function (grid, record) {
        
    },
    
    onNonLocationItemClick: function (grid, record) {
        var me = this,
            nonLocationForm = me.lookupReference('nonLocationForm');
        
        if (record) {
            nonLocationForm.getViewModel().setData({ record: record });
        }
    },
    
    onJobCreateClick: function () {
        var w = Ext.widget('jobform');
    },
    
    onStepCreateClick: function () {
        var w = Ext.widget('stepform');
    }
});
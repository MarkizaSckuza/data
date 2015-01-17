Ext.define('DataGenerator.controller.Job', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.job',

    init: function () {
        var me = this;
        
        me.control({
            'jobgrid': {
                itemclick: me.onJobItemClick,
                selectionchange: me.onJobSelectionChange
            },
            'jobgrid button[action=create]': {
                click: me.onJobCreateClick
            },
            'jobform button[action=close]': {
                click: function () { }
            },
            'stepgrid': {
                itemclick: me.onStepItemClick,
                selectionchange: me.onStepSelectionChange
            },
            'stepgrid button[action=create]': {
                click: me.onStepCreateClick
            },
            'stepgrid button[action=remove]': {
                click: me.onStepRemoveClick
            },
            'scenariogrid': {
                itemclick: me.onScenarioItemClick
            },
            'nonlocationgrid': {
                itemclick: me.onNonLocationItemClick
            },
            'button[action=save-all-jobs]': {
                click: me.onSaveAllJobs
            }
        });
        
        me.stores = {
            scenarios: Ext.create('DataGenerator.store.jobs.Scenario', { autoLoad: true }),
            steps: Ext.create('DataGenerator.store.jobs.Step', { autoLoad: true }),
            outputs: Ext.create('DataGenerator.store.jobs.Output', { autoLoad: true })
        };
    },
    
    onJobItemClick: function (grid, record) {
        var me = this,
            stepGrid = me.lookupReference('stepGrid');
        
        stepGrid.reconfigure(record.steps());
        stepGrid.getViewModel().setData({ job: record });
        
        me.clearGrids();
    },
    
    onJobSelectionChange: function (grid, records) {
        var me = this,
            stepGrid = me.lookupReference('stepGrid');
    
        if (records.length) {
            stepGrid.down('button[action=create]').enable();
        } else {
            stepGrid.down('button[action=create]').disable();
        }
    },
    
    onStepItemClick: function (grid, record) {
        var me = this,
            scenarioGrid = me.lookupReference('scenarioGrid'),
            nonLocationGrid = me.lookupReference('nonLocationGrid'),
            locationForm = me.lookupReference('locationForm'),
            
            locationBasedOutput = record.getLocationBasedOutput();
        
        scenarioGrid.reconfigure(record.scenarios());
        scenarioGrid.getViewModel().setData({ step: record });
        
        nonLocationGrid.reconfigure(record.outputs());
        nonLocationGrid.getViewModel().setData({ step: record });
        
        if (locationBasedOutput) {
            locationForm.getViewModel().setData({ record: record.getLocationBasedOutput() });
        }
    },
    
    onStepSelectionChange: function (grid, records) {
        var me = this,
            stepGrid = me.lookupReference('stepGrid');
    
        if (records.length) {
            stepGrid.down('button[action=remove]').enable();
        } else {
            stepGrid.down('button[action=remove]').disable();
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
        Ext.widget('jobform');
    },
    
    onStepCreateClick: function () {        
        var me = this,
            stepGrid = me.lookupReference('stepGrid'),
            stepStore = stepGrid.getStore(),
            record = Ext.create('DataGenerator.model.jobs.Step');
    
        var scenarioStore = me.stores.scenarios,
            outputStore = me.stores.outputs;
    
        scenarioStore.load(function (scenarios) {
            record.scenarios().add(scenarios);
        });
        
        outputStore.load(function (outputs) {
            record.outputs().add(outputs);
        });
        
        stepStore.add(record);
    },
    
    onStepRemoveClick: function () {
        var me = this,
            stepGrid = me.lookupReference('stepGrid'),
            record;
    
        if (stepGrid.getSelectionModel().hasSelection()) {
            record = stepGrid.getSelectionModel().getSelection()[0];
            stepGrid.getStore().remove(record);
            me.clearGrids();
        }
        
    },
    
    onSaveAllJobs: function (btn) {
        var me = this,
            jobGrid = me.lookupReference('jobGrid');
        
        jobGrid.getStore().sync();

        var jobs = [];

        Ext.each(jobGrid.getStore().data.items, function (job) {
            jobs.push(job.getAssociatedData());
        });
        
        console.log(jobs, jobGrid.getStore().getProxy());
        
        Ext.Ajax.request({
            url: jobGrid.getStore().getProxy().url,
            success: function () {
                Ext.Msg.alert('Success', 'Jobs saved successfully');
            },
            failure: function () {
                Ext.Msg.alert('Failure', 'Jobs wasn\'t saved successfully');
            },
            jsonData : jobs
        });
    },
    
    clearGrids: function () {
        var me = this,
            scenarioGrid = me.lookupReference('scenarioGrid'),
            nonLocationGrid = me.lookupReference('nonLocationGrid');
    
        // @TODO: find out correct way to bind empty store
        scenarioGrid.reconfigure(Ext.create('Ext.data.Store'));
        nonLocationGrid.reconfigure(Ext.create('Ext.data.Store'));
    }
});
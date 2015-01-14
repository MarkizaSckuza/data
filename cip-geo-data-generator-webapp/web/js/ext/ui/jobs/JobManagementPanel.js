Ext.define("DataGenerator.ui.jobs.JobManagementPanel",{
    extend: 'Ext.panel.Panel',
    requires: [
        'DataGenerator.ui.jobs.JobGrid',
        'DataGenerator.ui.jobs.ScenarioGrid',
        'DataGenerator.ui.jobs.StepGrid',
        'DataGenerator.ui.jobs.NonLocationGrid',
        
        'DataGenerator.ui.jobs.LocationForm',
        'DataGenerator.ui.jobs.NonLocationForm',
        
        'DataGenerator.store.jobs.Job',
        'DataGenerator.store.jobs.Step',
        'DataGenerator.store.jobs.Scenario',
        'DataGenerator.store.jobs.NonLocation'
    ],
    title: 'Jobs manager',
    margin: '0 0 0 0',
    layout: 'border',
    items:[
        {
            xtype: 'container',
            region: 'center',
            layout: 'vbox',
            defaults: {
                xtype: 'container',
                flex: 1,
                layout: 'hbox',
                width: '100%',
                defaults: {
                    flex: 1,
                    height: '100%'
                }
            },
            items: [
                {
                    items: [
                        { xtype: 'jobgrid' },
                        { xtype: 'scenariogrid' }
                    ]
                },
                {
                    items: [
                        { xtype: 'stepgrid' },
                        { xtype: 'nonlocationgrid' }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            region: 'east',
            layout: 'vbox',
            items: [
                { xtype: 'locationform' },
                { xtype: 'nonlocationform' }
            ]
        }
    ]
});

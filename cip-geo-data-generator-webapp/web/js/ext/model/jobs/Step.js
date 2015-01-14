Ext.define('DataGenerator.model.jobs.Step', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'locationBasedOutput' },
        { name: 'scenarios', reference: 'Scenario' },
        { name: 'nonlocations', reference: 'NonLocation' }
    ],

    schema: {
        namespace: 'DataGenerator.model.jobs'
    }
});

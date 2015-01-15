Ext.define('DataGenerator.model.jobs.Scenario', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'selected', type: 'boolean' },
        { name: 'fileName', type: 'string' },
        { name: 'step', reference: 'Step' }
        
    ],

    schema: {
        namespace: 'DataGenerator.model.jobs'
    }
});

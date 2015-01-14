Ext.define('DataGenerator.model.jobs.Job', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'steps', reference: 'Step' }
    ],

    schema: {
        namespace: 'DataGenerator.model.jobs',  // generate auto entityName

        proxy: {
            type: 'ajax',
            url: '/jobs.json',
            reader: {
                type: 'json'
            }
        }
    }
});

Ext.define('DataGenerator.store.jobs.Job', {
    extend: 'Ext.data.Store',
    model: 'DataGenerator.model.jobs.Job',
    
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url : '/jobs.json',
        reader: {
            type: 'json'
        }
    }
});
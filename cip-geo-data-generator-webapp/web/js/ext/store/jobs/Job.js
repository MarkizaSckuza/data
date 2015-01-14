Ext.define('DataGenerator.store.jobs.Job', {
    extend: 'Ext.data.Store',
    model: 'DataGenerator.model.jobs.Job',
    
    id: 'Job',
    
    storeId: 'Job',
    autoLoad: true
});
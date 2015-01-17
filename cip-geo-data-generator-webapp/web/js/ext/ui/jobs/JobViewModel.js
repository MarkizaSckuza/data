Ext.define('DataGenerator.ui.jobs.JobViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.jobviewmodel',
    
//    data: { record: null },
    
    stores: {
        jobs: {
            model: 'DataGenerator.model.jobs.Job',
            autoLoad: true,

            proxy: {
                type: 'ajax',
                url : '/jobs.json',
                reader: {
                    type: 'json'
                },
                writer: new Ext.data.JsonWriter({
                    getRecordData: function (record) { debugger; return record.data; }
                })
            }
        }
    }
});
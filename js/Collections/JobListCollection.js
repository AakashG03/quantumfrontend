var JobListcollection = Backbone.Collection.extend({
  model: window.JobListmodel,
  url: "http://backendquantum.test/walkin/joblist",
  dataFetched:{},
  paramId: null,
  fetchCollection: function () {
    this.fetch({
      success: function (collection) {
        this.dataFetched = collection.toJSON()[0]['data'];
        this.trigger("Fetch.List");
      }.bind(this),
    });
  },
});

window.JobListcollection = JobListcollection;

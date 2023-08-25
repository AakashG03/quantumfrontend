var JobListcollection = Backbone.Collection.extend({
    url: "http://backendquantum.test/walkin/joblist",
    model: window.JobListmodel,
  });

  window.JobListcollection = JobListcollection;
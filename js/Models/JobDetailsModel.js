var JobdetailsModel = Backbone.Model.extend({
  initialize: function () {
    this.url =
      "http://backendquantum.test/walkin/jobdetails?id=" + this.get("id");
  },
  detail: {},
});

window.JobdetailsModel = JobdetailsModel;
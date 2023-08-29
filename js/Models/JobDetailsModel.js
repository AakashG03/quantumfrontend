var JobdetailsModel = Backbone.Model.extend({
  initialize: function () {
    this.url =
      "http://backendquantum.test/walkin/jobdetails?id=" + this.get("id");
  },
  detail: {},
  fetchModel: function () {
    this.fetch({
      success: function (model) {
        console.log(model.toJSON()["data"]);
        this.detail = model.toJSON()["data"];
        this.trigger("Model.fetched");
      }.bind(this),
    });
  },
});

window.JobdetailsModel = JobdetailsModel;

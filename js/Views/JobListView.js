var JobListview = Backbone.View.extend({
  initialize: function () {
    this.collection.fetchCollection();
    this.listenTo(this.collection, "Fetch.List", this.render);
  },
  
  paramId: null,
  render: function () {
    var self = this;
    const renderTemplate = this.template();
    this.$el.html(renderTemplate);

    this.$("[data-job-id]").on("click", function (event) {
      self.createIdParam(event);
    });
  },
  template: _.template(window.joblisttemplate),
  createIdParam: function (event) {
    this.paramId = $(event.currentTarget).attr("data-job-id");
    window.location.href = "/jobdetails.html?id=" + this.paramId;
  },
});

window.JobListview = JobListview;

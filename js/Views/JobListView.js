var JobListview = Backbone.View.extend({
  initialize: function () {
    this.collection.fetchCollection();
    this.listenTo(this.collection, "Fetch.List", this.render);
  },
  render: function () {
    const renderTemplate = this.template();
    this.$el.html(renderTemplate);
    console.log(this.collection.dataFetched);
  },
  template: _.template(window.joblisttemplate),
});

window.JobListview = JobListview;

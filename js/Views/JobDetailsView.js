var Jobdetailview1 = Backbone.View.extend({
  initialize: function () {
    this.model.fetchModel();
    this.listenTo(this.model, "Model.fetched", this.render);
  },
  render: function () {
    this.$el.html(this.template());
  },
  template: _.template(window.jobdetailstemplate1),
});
var Jobdetailview2 = Backbone.View.extend({
  initialize: function () {
    this.model.fetchModel();
    this.listenTo(this.model, "Model.fetched", this.render);
  },
  render: function () {
    this.$el.html(this.template());
  },
  template: _.template(window.jobdetailstemplate2),
});

window.Jobdetailview1 = Jobdetailview1;
window.Jobdetailview2 = Jobdetailview2;

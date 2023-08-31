var Jobdetailview1 = Backbone.View.extend({
  initialize: function () {
    this.model.fetchModel();
    this.listenTo(this.model, "Model.fetched", this.render);
  },
  events: {
    "click .title_arrow": "hideTab",
    "click .course_btn": "applyJob",
  },
  render: function () {
    this.$el.html(this.template());
  },
  template: _.template(window.jobdetailstemplate1),
  hideTab: function (event) {
    this.$el.find(".information").toggle();
  },
  applyJob: function () {
    ticketData = {};
    var selectedRoles = [];
    $('input[name="js"]:checked').each(function () {
      selectedRoles.push($(this).val());
    });
    var selectedTime = $('input[name="time"]:checked').val();
    ticketData.time = selectedTime;
    ticketData.tech_fam = selectedRoles.toString();
    ticketData.job_id = this.model.detail["id"]
    ticketData.date = this.model.detail["start_date"]
    ticketData.venue = this.model.detail["location"]
    ticketData.user_id = window.sessionStorage.getItem("user_id")
    if(ticketData.tech_fam.length>0){
      var data = JSON.stringify(ticketData)
      sessionStorage.setItem("ticketData",data)
      window.location.pathname = "/hallticket.html";
    }
  },
});
var Jobdetailview2 = Backbone.View.extend({
  initialize: function () {
    this.model.fetchModel();
    this.listenTo(this.model, "Model.fetched", this.render);
  },
  events: {
    "click .title_arrow": "hideTab",
  },
  render: function () {
    this.$el.html(this.template());
  },
  template: _.template(window.jobdetailstemplate2),
  hideTab: function (event) {
    tabId = event.currentTarget.getAttribute("id");
    this.$el.find(".roleinformation#" + tabId).toggle();
  },
});

window.Jobdetailview1 = Jobdetailview1;
window.Jobdetailview2 = Jobdetailview2;

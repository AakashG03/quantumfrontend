var LoginModel = Backbone.Model.extend({
  data: {},
  url: "http://backendquantum.test/applicant/login",
  login: function () {
    this.save(null, {
      success: function (model) {
        this.data = model.toJSON()["data"];
        this.trigger("Loggin.complete");
      }.bind(this),
    });
  },
});

window.LoginModel = LoginModel;

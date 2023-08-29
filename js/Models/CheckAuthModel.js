var CheckauthModel = Backbone.Model.extend({
  url: "http://backendquantum.test/applicant/checkauth",
  initialize: function () {
    this.checkauth();
  },
  checkauth: function () {
    this.save(null, {
      success: function (model) {
        var username = model.toJSON()["data"];
        if (username) {
          if (window.location.pathname == "/login.html") {
            window.location.pathname = "/joblist.html";
          } 
        } else {
          if (window.location.pathname != "/login.html") {
            window.location.pathname = "/login.html";
          }
        }
      }.bind(this),
    });
  },
});

window.CheckauthModel = CheckauthModel;

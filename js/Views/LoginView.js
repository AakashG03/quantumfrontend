var LoginView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "Loggin.complete", this.renderlogin);
  },
  events: {
    click: "onClick",
  },
  onClick: function () {
    if ($("#userEmail").val() != "" && $("#userPassword").val() != "") {
      this.model.set({
        email: $("#userEmail").val(),
        password: $("#userPassword").val(),
      });
      this.model.login();
    }
  },
  renderlogin: function () {
    if (this.model.get("data") == "No Email found") {
      console.log("loggin failed");
    } else {
      sessionStorage.setItem("auth_key",this.model.data["auth_key"])
      window.location.href = "joblist.html";
    }
  },
});

window.LoginView = LoginView;

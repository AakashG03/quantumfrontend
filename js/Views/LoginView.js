var LoginView = Backbone.View.extend({
    events: {
      click: "onClick",
    },

    onClick: function () {
      this.self = this;
      self.email = $("#userEmail").val();
      self.password = $("#userPassword").val();
      if (self.email != null && self.password != "") {
        this.Submit();
      }
    },
    Submit: function () {
      var loginuser = new window.LoginModel({
        email: self.email,
        password: self.password,
      });
      loginuser.save(
        {},
        {
          success: function (model, response, options) {
            if (response["data"] == "No Email found") {
              alert("No user Found");
            } else {
              sessionStorage.setItem("auth_key", response["data"]["auth_key"]);
              console.log(sessionStorage.getItem("auth_key"));
              window.location.href = "joblist.html";
            }
          },
        }
      );
    },
  });

window.LoginView = LoginView;
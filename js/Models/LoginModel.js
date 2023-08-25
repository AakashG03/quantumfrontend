var LoginModel = Backbone.Model.extend({
    url: "http://backendquantum.test/applicant/login",
    default: {
      email: "",
      password: "",
    },
  });

window.LoginModel = LoginModel;
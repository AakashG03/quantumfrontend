const storedUserId = sessionStorage.getItem("auth_key");
if (storedUserId) {
  var checkauthmodel = new window.CheckauthModel({ auth_key: storedUserId });
} else {
  var loginmodel = new window.LoginModel();
  var loginview = new window.LoginView({ el: "#login_btn", model: loginmodel });
}

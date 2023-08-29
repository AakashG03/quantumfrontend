const storedUserId = sessionStorage.getItem("auth_key");
if (storedUserId) {
  window.location.href = "joblist.html";
} else {
  var loginmodel = new window.LoginModel();
  var loginview = new window.LoginView({ el: "#login_btn", model: loginmodel });
}

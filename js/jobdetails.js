const storedUserId = sessionStorage.getItem("auth_key");
if (storedUserId) {
  var checkauthmodel = new window.CheckauthModel({ auth_key: storedUserId });
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");
  var jobdetailsmodel = new window.JobdetailsModel({ id: jobId });
  var loginmodel = window.LoginModel;
  var jobdetailview1 = new window.Jobdetailview1({
    el: "#part1",
    model: jobdetailsmodel,
  });
  var jobdetailview2 = new window.Jobdetailview2({
    el: "#part2",
    model: jobdetailsmodel,
  });
}

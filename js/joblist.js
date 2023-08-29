const storedUserId = sessionStorage.getItem("auth_key");
if (storedUserId) {
  var checkauthmodel = new window.CheckauthModel({ auth_key: storedUserId });
  var joblistcollection = new window.JobListcollection();
  var joblistview = new window.JobListview({
    el: ".grid_container",
    collection: joblistcollection,
  });
}

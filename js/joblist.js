// const storedUserId = sessionStorage.getItem("auth_key");
// if (!storedUserId) {
//   window.location.href = "/login.html";
// } else {
//   const storedUserId = sessionStorage.getItem("auth_key");
var joblistcollection = new window.JobListcollection();
var joblistview = new window.JobListview({
  el: ".grid_container",
  collection: joblistcollection,
});

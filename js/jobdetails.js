var jobdetailsmodel = new window.JobdetailsModel({ id: 2 });
var jobdetailview1 = new window.Jobdetailview1({
  el: "#part1",
  model: jobdetailsmodel,
});
var jobdetailview2 = new window.Jobdetailview2({
  el: "#part2",
  model: jobdetailsmodel,
});

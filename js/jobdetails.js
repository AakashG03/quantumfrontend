
var details = new window.JobdetailsModel({ id: 2 });
details.fetch({
  success: function (model, response) {
    var detailsview1 = new window.Detailview1({
      el: "#part1",
      model: response["data"],
    });
    detailsview1.render();
    var detailsview2 = new window.Detailview2({
      el: "#part2",
      model: response["data"],
    });
    detailsview2.render();
  },
});


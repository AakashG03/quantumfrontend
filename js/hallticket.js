const storedUserId = sessionStorage.getItem("auth_key");
if (storedUserId) {
  var hallticketmodel = new window.HallticketModel(JSON.parse(sessionStorage.getItem("ticketData")));
  var hallticketview = new window.HallticketView({
    el: ".content_container",
    model: hallticketmodel,
  });
}

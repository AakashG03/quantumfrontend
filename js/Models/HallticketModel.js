var HallticketModel = Backbone.Model.extend({
initialize:function(){
    this.createHallticket()
},
url:"http://backendquantum.test/walkin/applyjob",
createHallticket:function(){
    this.save(null, {
        success: function (model) {
          if(model.toJSON()['data']=="Hallticket Created")
          {
            this.trigger("success");
            model.clear();
            sessionStorage.removeItem('ticketData')
          }
        }.bind(this),
      });
}
})

window.HallticketModel = HallticketModel;
var HallticketView = Backbone.View.extend({
  initialize: function () {
    console.log();
    this.listenTo(this.model, "success", this.render);
  },
  render:function(){
    console.log(this.model.toJSON()['date'])
    $("#date").html(this.model.toJSON()['date']) 
    $("#time").html(this.model.toJSON()['time']) 
  }
});

window.HallticketView = HallticketView;

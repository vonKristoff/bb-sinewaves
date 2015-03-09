define(['backbone'], function (Backbone){

  var sineModel = Backbone.Model.extend({

    defaults: {
      steps: 50,
      thickness: 2,
      speed: 10,
      frequency: 50,
      amplitude: 50,
      scroll: 0,
      increment: 0.1,
      fade:100
    }
    // ,
    // parse: function (data){
    //   // are you recieving a bloated JSON model? 
    //   // filter to your desired schema
    //   // var map = {
    //   //   thickness: data.custom.filter.path.thickness,
    //   //   speed:     data.custom.filter.speed,
    //   //   frequency: data.frequency,
    //   //   ampitute:  data.custom.filter.ampitute,
    //   //   count:     data.count
    //   // }
    //   // return map
    // }
  })
  return sineModel

});
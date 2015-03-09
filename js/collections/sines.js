define(['backbone', 'models/sinedata'], function (Backbone, sineModel){

  var sineCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('Sines'),
    model: sineModel
    // ,
    // parse: function (response){
    //   // does your request return an array with your desired models
    //   // return response.path.inJSON.to.array
    // }
  })

  return sineCollection
});
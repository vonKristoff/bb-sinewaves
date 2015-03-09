define(['backbone','views/app', 'models/app'], function (Backbone, AppView, AppModel){
  
  var initialize = function (){

    var appModel = new AppModel({id: 'JCN'}),
        appView = new AppView({model: appModel});
    
    $('body').append(appView.render().el)


    // set router
    // start history

    // fetch data
    appModel.fetch(); // from local storage
    // create new collection and fetch from server
  }

  return {
    initialize: initialize
  }

});
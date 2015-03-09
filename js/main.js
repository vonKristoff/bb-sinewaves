require(['config'], function(){

  require(['backbone', 'app', 'enterframe'], function (Backbone, App, EnterFrame) {

    window.enterFrame = new EnterFrame();

    App.initialize();
      
  })
})  
define(['jquery', 'transparency', 'models', 'controller'], function ($, Transparency, Models, Controller){

  // bind Template engine to jQuery
  $.fn.render = Transparency.jQueryPlugin;

  var App = function(){
    
    this.init();
      
    return this.api()
  }
  var ap = App.prototype;
  
  ap.init = function(){
    // add templates to page
    $('.wrapper').load('partials/content.html', function(){
      
      
    }.bind(this));  
  };
  
  ap.render = function(){
    
  }
  
  ap.errs = function (msg){
    var data = {
      msg: msg
    }
    Transparency.render(document.getElementById('error'), data);
  }
  ap.api = function(){
    return {
      info: {
        version: 1.0,
        name: 'My App'
      }
    }
  }
  return App;
});
define(['backbone','storage'], function (Backbone){

  var AppModel = Backbone.Model.extend({
    localStorage: new Backbone.LocalStorage('AppSettings'),
    defaults: {
      colour: '#77ee88',
      msg: 'welcome to the app'
    }
  })

  return AppModel

});
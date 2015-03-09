require.config({
  
  paths: {
    jquery:    '../node_modules/jquery/dist/jquery',
    backbone:  '../node_modules/backbone/backbone',
    underscore:'../node_modules/underscore/underscore',
    handlebars:'../node_modules/handlebars/dist/handlebars',
    storage:   '../node_modules/backbone.localStorage/backbone.localStorage',
    text:      '../node_modules/requirejs-text/text'
  },
  shim: {
    underscore:{
      exports:'_'
    },
    backbone:{
      deps:['underscore','jquery'],
      exports:'Backbone'
    },
    handlebars:{
      exports:'Handlebars'
    }
  }
});
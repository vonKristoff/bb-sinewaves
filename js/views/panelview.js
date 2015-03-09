define(['backbone', 'text!templates/panel.html', 'handlebars'], function (Backbone, PanelTemplate, Handlebars){

  var panelView = Backbone.View.extend({
    template: Handlebars.compile($(PanelTemplate).html()),
    initialize: function (){

    },
    events: {
      'change input': 'slideHandle'
    },
    slideHandle: function (e){

      var changed = e.currentTarget,
          value = $(e.currentTarget).val(),
          obj = {};

      obj[changed.id] = parseInt(value);
      this.model.set(obj);

      this.render(this.model);

    },
    prerender: function (id){

      var Model = this.collection.get(id);
      console.log('from panel',id);
      this.model = Model;

      this.render(Model);
    },
    render: function (Model){

      if(Model){
        this.$el.html(this.template(Model.toJSON()));  
      }
      
      return this
    }
  });

  return panelView

});
define(['backbone', 'text!templates/partials/body.html', 'views/sineview', 'storage'], function (Backbone, boilerplate, SineView){

  var AppView = Backbone.View.extend({
    id: 'app-view',
    html: boilerplate, // adding raw html
    views: {}, // route view handler
    initialize: function(){

      this.listenTo(this.model, 'change', this.render); // re-render on model change

      // bring in other sub views here (handle a set page method)

      this.$el.append(this.html);


      this.views['content'] = new SineView({
        id: 'main-content',
        className: 'sines-view'
      })


      this.$el.append(this.views['content'].render().el);

      // cache some $ selectors here too

    },
    events: {
      'click #btn-add':'addNewSine',
      'click #btn-clear':'clearAll',
      'click .nav-bar':'clean'
    },
    clean: function (){
      $('li.active').removeClass('active');
    },
    addNewSine: function (){
      this.views['content'].addNew();
    },
    clearAll: function (){
      localStorage.clear();
      this.views['content'].refresh();
    },
    render: function(){

      // this.$el.css('background-color', this.model.get('colour'));
      // this.$('.msg').text(this.model.get('msg'))

      return this 
    }
  })

  return AppView;

});
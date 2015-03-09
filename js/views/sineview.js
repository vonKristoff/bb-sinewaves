define(['backbone','text!templates/partials/sines.html', 'collections/sines', 'text!templates/sine-stats.html', 'handlebars', 'views/panelview', 'canvas', 'text!templates/sine-container.html'], function (Backbone, Boilerplate, SineCollection, SineStats, Handlebars, PanelView, onCanvas, SineContainer){

  var sineview = Backbone.View.extend({

    html: Boilerplate,
    canvas: Handlebars.compile($(SineContainer).html()),
    views: {},
    template: Handlebars.compile($(SineStats).html()),
    cached: {},
    initialize: function (){
      
      this.$el.append(this.html);

      // cache jquery selectors here
      this.$message = this.$('.caption');
      this.$tgt = this.$('.sinesCollection');
      this.$panel = this.$('.panel');

      this.collection = new SineCollection([]);
      this.listenTo(this.collection, 'change', this.render);
      this.collection.fetch();


      this.views['panel'] = new PanelView({
        className: 'control-panel',
        collection: this.collection
      })

      window.debug = {
        data: this.collection
      }

      this.$panel.append(this.views['panel'].render().el);

      this.addCanvas();

      enterFrame.pipe.view(this);

      this.render();

    },
    events: {
      'click li': 'selected',
    },
    addNew:function (){
      this.collection.create();
      this.addCanvas();
      this.render();
    },
    selected: function (e){
      var id = $(e.currentTarget).data('id');

      if(this.$panel.hasClass('hide')) this.$panel.removeClass('hide');
      this.$('li.active').removeClass('active');

      this.$('li[data-id="'+id+'"]').addClass('active');
      this.views['panel'].prerender(id);
      
    },
    addCanvas: function (){

      enterFrame.pipe.run(false);

      if(this.collection.length){

        this.$tgt.empty(); // clear first

        this.collection.each(function (Model, i, data){
            
          var id = Model.get('id');

          this.$tgt.append(this.canvas(Model.toJSON()))
            
          setTimeout(function(){

            var canvas = document.getElementById(id).getContext('2d');

            canvas.width = 300;
            canvas.height = 150;

            this.cached[id] = {
              ctx: canvas
            }

          }.bind(this),100)
          

        }.bind(this))
      }
    },
    refresh: function (){
      this.collection.reset();
      this.addCanvas();
      this.render();
    },
    render: function (){

      if(!this.collection.length){

        this.$message.html('There are no sines in the collection, yet..');
        this.$tgt.empty();
      
      } else {

        this.collection.each(function (Model, i, data){
          
          var id = Model.get('id');

          enterFrame.pipe.set(id, Model.attributes);

          this.$tgt.find('li[data-id="'+id+'"] .stats-container').html(this.template(Model.toJSON()));
          
        }.bind(this))

        setTimeout(function(){
          enterFrame.pipe.run(true);
        },200);

      }

      return this // return this so that the whole view can be added by the parent view
    },
    draw: function (item){
      
      onCanvas.sine.call(this, item);

    }

  })

  return sineview

});
define(['jquery'], function ($){


  var onEnterFrame = function (){

    this.run = false;
    this.data = {};
    this.ctx = {};
    
    requestAnimationFrame(this.loop.bind(this));  

    return {
      pipe: this.pipe()
    }
  }
  var ef = onEnterFrame.prototype;

 
  
  ef.pipe = function (){
    return {
      set: function (id, obj){
        if(this.data[id] === 'undefined'){
          this.data[id] = {};
          this.data[id] = obj;
        } else {
          this.data[id] = obj;
        }
      }.bind(this),
      get: function (id){
        return this.data[id]
      }.bind(this),
      view: function (ctx){
        this.ctx = ctx;
      }.bind(this),
      run: function (bool){
        this.run = bool
      }.bind(this)
    }
  }

  ef.loop = function (){


    if(this.run){

      // console.log(this.ctx);
      _.each(this.data, function (item){
        item.count += item.increment
        this.ctx.draw(item);
      }.bind(this))

      
      
    }
    requestAnimationFrame(this.loop.bind(this));  
  }

  return onEnterFrame

});
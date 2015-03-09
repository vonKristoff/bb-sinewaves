define(['jquery'], function ($){
  
  var width = 300,
      height = 150,
      padding = 0,
      ypos = 75;

  var types = {
  
    sine: function (item){

        var ctx = this.cached[item.id].ctx;

        // var lastImage = ctx.getImageData(0,0,width,height);
        // var pixelData = lastImage.data;
        
        // var f;
        // var len=pixelData.length;

        // for (f=0; f<len; f+=Math.round(Math.random()*5)) {
        //     pixelData[f] -= 5;//item.fade;
        // }
        // ctx.putImageData(lastImage,0,0);


        ctx.clearRect(0, 0, width, height); 
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,1)';
        ctx.lineJoin = 'round';
        ctx.lineWidth = item.thickness;


        var step = width/item.steps; //item.steps;

        for(var x= padding+item.scroll; x<item.scroll+width-padding; x+= step) {
        
          var y = ypos + Math.cos(item.scroll + (x / item.frequency)) * item.amplitude;

          ctx.lineTo(x - item.scroll, y);
        }

        ctx.stroke();
        ctx.closePath();

        item.scroll += (item.speed / 250);

    }
  }

  return types

});
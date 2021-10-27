var gc=new GameCanvas();
var t=0;
loop();
function loop(){
    background("rgba(255,255,255,0.1)");
    var d=[function(g){
        return Math.sin(g * 6 + t * 0.01) * (100) * Math.sin(t * 0.03)
    },function(g){
        return(Math.sin(g * 6 + t * 0.01) * (120) + 20) * Math.sin(t * 0.03)
    }];
    var b=["rgb(255, 217, 0)","rgb(0, 67, 143)"];
    for(var f=0;f<2;f++){
        var a=b[f];
        var c=d[f];
        beginPath();
        for(var e=0;e<=1+0.01;e+=0.01){
            lineTo(e * width, height - 200 + c(e))
        }
        lineTo(width,height);
        lineTo(0,height);
        closePath();
        fillStyle(a);
        fill()
    }
    t++;
    update();
    requestAnimationFrame(loop)
};
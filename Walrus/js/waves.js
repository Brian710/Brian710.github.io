(function(){
	"use strict";
	var cvs,ctx;
	var nodes = 6;
	var waves = [];
	var waveHeight = 150;
	var colours = ["#FFFFFF","#FFD900","#00428E"];
	
  // Initiator function
	function init() {
		cvs = document.getElementById("canvas");
		ctx = cvs.getContext("2d");
		resizeCanvas(cvs);    
		for (var i = 0; i < 3; i++) {
			waves.push(new wave(colours[i], 1, nodes));
		}
        update();
	}
	function update() {
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="rgba(0,0,0,0)";
		ctx.globalCompositeOperation = "source-over";
		ctx.fillRect(0,0,cvs.width,cvs.height);
		ctx.globalCompositeOperation = "source-over";
		for (var i = 0; i < waves.length; i++) {
			for (var j = 0; j < waves[i].nodes.length; j++) {
				bounce(waves[i].nodes[j]);
			}
			drawWave(waves[i]);
		}
    	requestAnimationFrame(update);
	}

	function wave(colour, lambda, nodes) {

		this.colour = colour;
		this.lambda = lambda;
		this.nodes = [];
		var tick = 1;
		for (var i = 0; i <= nodes; i++) {
			var temp = [(i-1) * cvs.width / nodes, 0, Math.random()*200, 2];
			this.nodes.push(temp);
		}
	}

	function bounce(nodeArr) {
		nodeArr[1] = waveHeight/2*Math.sin(nodeArr[2]/20)+cvs.height/2;
		nodeArr[2] = nodeArr[2] + nodeArr[3];
	}
	
	function drawWave (obj) {
    
		var diff = function(a,b) {
			return (b - a)/2 + a;
		}    
		ctx.fillStyle = obj.colour;
		ctx.beginPath();
		ctx.moveTo(0,cvs.height);
		ctx.lineTo(obj.nodes[0][0],obj.nodes[0][1]);    
		for (var i = 0; i < obj.nodes.length; i++) {
			if (obj.nodes[i+1]) {
				ctx.quadraticCurveTo(
					obj.nodes[i][0],obj.nodes[i][1],
					diff(obj.nodes[i][0],obj.nodes[i+1][0]),diff(obj.nodes[i][1],obj.nodes[i+1][1])
				);
			}
      		else {
				ctx.lineTo(obj.nodes[i][0],obj.nodes[i][1]);
				ctx.lineTo(cvs.width,cvs.height);
			}
		}
		ctx.closePath();
		ctx.fill();
	}

	function resizeCanvas(canvas,width,height) {
    
		if (width && height) {
			canvas.width = width;
			canvas.height = height;
		}
    	else {
      
			if (window.innerWidth > 1920) {
				canvas.width = window.innerWidth;
			}
			else {
				canvas.width = 1920;
			}
      
			canvas.height = waveHeight;
		}
	}
	document.addEventListener("DOMContentLoaded",init,false);
})();
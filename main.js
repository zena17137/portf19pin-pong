var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	
	var okLeft = false		
	var okRight = false	

	var drawRect = function(){
		ctx.fillStyle = "khaki"
		ctx.fillRect(0, 0, 400, 500)		
	}
	
	var circle = function(x, y){
		ctx.fillStyle = "brown"
		ctx.beginPath()
		ctx.arc(x, y, 10, 0, 6.28, false)
		ctx.fill()
	}
	
	var stop = function(){
		cancelAnimationFrame(myReq)
		ctx.font = "60px Arial"
		ctx.fillStyle = "red"
		ctx.fillText("Game over", 40, 200)
		stop = true
	}
	
	class Platform{
		constructor(x, y){
			this.x = x
			this.y = y
		}
		
		drawPlatform(){
			if(okLeft === true && this.x > 0) {this.x -=5}
			if(okRight === true && this.x < 300) {this.x +=5}
	
			ctx.fillStyle = "teal"
			ctx.fillRect(this.x, this.y, 100, 20)
		}
	}

	var myPlatf = new Platform(150, 480)
		
	class Ball {
		constructor(x, y){
			this.x = x
			this.y = y
		}
		
		addX = 2
		addY = -3
		
		drawBall(){
			circle(this.x, this.y)
			this.x +=this.addX
			this.y +=this.addY
			
			if (this.x + 10 > 400){				
				this.addX = - this.addX				
			}
			
			if (this.x - 10 < 0){
				this.addX = -this.addX
			}
			
			if (this.y - 10 < 0){				
				this.addY = - this.addY				
			}
			
			if (this.y + 10 === 480 && this.x + 10 > myPlatf.x && this.x - 10 < myPlatf.x + 100){
				this.addY = - this.addY
			}	
			
			if (this.y - 10 > 500){
				stop()
			}
		}
	}
	
	var myBall = new Ball(200, 470)		
	
	var render = function(){	
		if (stop === true){return}
		
		drawRect()
		myPlatf.drawPlatform()
		myBall.drawBall()
		
		myReq = requestAnimationFrame(render)
	}
	render()
	
	addEventListener("keydown", function(event){
		var newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = true
		}
		
		if (newDirect === 39){
			okRight = true
		}
	})
	
	addEventListener("keyup", function(event){
		var newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = false
		}
		
		if (newDirect === 39){
			okRight = false
		}
	})

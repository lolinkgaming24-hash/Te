const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576

c.fillStyle = "black"
c.fillRect(0,0,canvas.width,canvas.height);

const gravity = 0.7

class Sprite {
  constructor({position, velocity}){
    this.position = position
    this.velocity = velocity
  }

  draw(){
    c.fillStyle = "red"
    c.fillRect(this.position.x, this.position.y, 50, this.height)

  update() {
    this.draw()

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }

  const player = new Sprite(){
    position{
      x : 0;
      y : 0;
    }
  }
  }
}

draw.player

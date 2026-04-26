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
    this.height = 150
    this.lastKey
    this.attackBox = {
      position: this.position,
      width: 100,
      height: 50
    }
  }

  draw(){
    c.fillStyle = "red"
    c.fillRect(this.position.x, this.position.y, 50, this.height)

    // attack box
    c.fillStyle = "green"
    c.fillRect( this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height )
  }

  update() {
    this.draw()

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}

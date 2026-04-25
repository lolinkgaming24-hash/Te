const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1030
canvas.height = 582

c.fillRect(0,0,canvas.width,canvas.height);

for(let i = 0; i < 100; i++;){
  console.log(i)
  wait(1000)
}

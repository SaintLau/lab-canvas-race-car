const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

// let obstacles = []; For the obstacles we'll add




 function startGame() {
}


class Road {
  constructor(width, height, image, x, y) {
    this.width = width;
    this.height = height;
    this.image = image;
    this.x = x;
    this.y = y;
    this.vy = -1;  //move the image Vertically is at the Y coords...V FOR VERTICAL

  const image = new Image();

    this.image = image;
    image.src = "/images/road.png"
    this.image.isReady = false;

    image.addEventListener('load', () => {  //this is to have the image class...I guess
      this.image.isReady = true;
        
    });
  }

  isReady() {
    return this.image.isReady;
  }

  draw() {
    if(this.isReady()){
      this.draw (
        this.image,
        0,
        this.isReady,
        this.width,
        this.height);
      
      this.draw (
        this.image,
        0,
        this.y + this.height,
        this.width,
        this.height);
      }
    }

  move() {
    this.y += this.vy;

    if(this.y + this.height <= 0) {   //if vertical + heigh is less or equal to zero, than y is 0
   this.y = 0;
    }
  }

}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    start();
  };

  var canvas = document.getElementById('racing');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  function start(){
    // Base background
    drawRectangle(0, 0, 350, 500, "#a2a5aa");

    // Borders
    drawRectangle(0, 0, 20, 500, 'green');
    drawRectangle(350-20, 0, 20, 500, 'green');

    // Road borders
    drawRectangle(25, 0, 10, 500, 'white');
    drawRectangle(350-35, 0, 10, 500, 'white');

    // Middle road white lines
    drawDashedLine();

    
  }

  function drawRectangle(x, y, width, height, hexColor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    ctx.fillStyle = hexColor;
    ctx.fillRect(x, y, width, height);
  }

  function drawDashedLine(){
    ctx.beginPath();
    ctx.setLineDash([20, 15]);
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, 500);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

}

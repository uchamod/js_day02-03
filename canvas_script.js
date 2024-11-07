const canva = document.getElementById("canva");
const ctx = canva.getContext('2d');
//draw a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(50, 40, 80, 80);


// Draw a circle
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();

// Draw a line
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(250, 20);
ctx.lineTo(250,100);

ctx.strokeStyle = "green";
ctx.stroke();

// Set font and color
ctx.font = "30px Arial";
ctx.fillStyle = "black";

// Draw filled text
ctx.fillText("Hello, Canvas!", 300,150);

// Draw outlined text
ctx.strokeStyle = "blue";
ctx.strokeText("Outlined Text", 350, 200);
//image
const img = new Image();
img.src = "ball.png"; // Replace with your image path


let count = 0;

let fps = 60;

const timer = setInterval(function () {
    ctx.clearRect(0, 0, 800, 500);
    count++;
    const img = new Image();
img.src = "ball.png"; // Replace with your image path
ctx.drawImage(img, count, 100, 100, 100); // Draw the image at (x, y)
    if (count >= 800) {
        count-=800;
          }
        // if (count <= 0) {
// //         count++;
// //   }
    console.log(count);

},1000/fps);
// img.onload = () => {
//     //ctx.drawImage(img, 350, 300, 150, 150);
//     // Draw image at x:50, y:50, with width and height of 300
//     function animate() {
//        // ctx.clearRect(0, 0, canva.width, canva.height); // Clear the canvas
//         ctx.drawImage(img, x, 100, 100, 100); // Draw the image at (x, y)
    
//         x += speed; // Update x-position
    
//         // Reset position when the image goes off the canvas
//         if (x > canvas.width) {
//             x = -100;
//         }
//         requestAnimationFrame(animate); // Continue the animation
//       }
//       animate();
// };




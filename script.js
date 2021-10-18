/* CANVAS */

const canvas = document.querySelector('canvas');

canvas.width = "402px";
canvas.height = "402px";

const ctx = canvas.getContext('2d');

// styles for the line to be drawn */
ctx.strokeStyle = '#000000';
ctx.lineWidth = 10;
ctx.lineCap = 'round';

// determine if line will draw or not
let shouldPaint = false;

// if mouse is clicked and held - line will draw
document.addEventListener('mousedown', function (event) {
    shouldPaint = true;
    ctx.moveTo(event.pageX, event.pageY);
    ctx.beginPath();
})

// stop drawing when the mouse button is released
document.addEventListener('mouseup', function (event) {
    shouldPaint = false;
})

// continue drawing while the mouse button is held down
document.addEventListener('mousemove', function (event) {
    if (shouldPaint) {
        ctx.lineTo(event.pageX, event.pageY);
        ctx.stroke();
    }
});


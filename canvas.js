const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'rgba(150, 125, 200, 0.5)';
ctx.lineWidth = 2;
ctx.lineCap = 'round';

let shouldPaint = false;

document.addEventListener('mousedown', function (event) {
    shouldPaint = true;
    ctx.moveTo(event.pageX, event.pageY);
    ctx.beginPath();
})

document.addEventListener('mouseup', function (event) {
    shouldPaint = false;
})

document.addEventListener('mousemove', function (event) {
    if (shouldPaint) {
        ctx.lineTo(event.pageX, event.pageY);
        ctx.stroke();
    }
});

// document.querySelectorAll('main button').forEach(btn => {
//     btn.addEventListener('click', function (event) {
//         ctx.strokeStyle = this.style.backgroundColor
//         console.log('clicked')
//     })
// })

document.querySelectorAll('main span').forEach(icon => {
    icon.addEventListener('click', function (event) {
        ctx.strokeStyle = this.style.color
        console.log('clicked')
    })
})

context.clearRect(0,0,width,height);
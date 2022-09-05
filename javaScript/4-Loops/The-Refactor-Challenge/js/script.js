let html = '';
let red;
let green;
let blue;
let randomRGB;

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

for ( let i = 1; i <= 10; i++ ) {
    randomRGB = `rgb( ${randomNumber()}, ${randomNumber()}, ${randomNumber()} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`; 
}

document.querySelector('main').innerHTML = html;
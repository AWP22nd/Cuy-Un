// Reset button functionality
function resetBackground() {
    document.body.style.backgroundColor = 'white';
    document.querySelector('.title').style.color = 'black';
}

// Black circle functionality
function changeTitleColor() {
    document.querySelector('.title').style.color = 'white';
}

// Add event listeners
document.getElementById('resetBtn').addEventListener('click', resetBackground);
const blackCircles = document.querySelectorAll('.circle.black');
blackCircles.forEach(circle => {
    circle.addEventListener('click', changeTitleColor);
});
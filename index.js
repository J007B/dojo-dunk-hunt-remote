const duck = document.getElementById('duck');
const bullets = document.getElementsByClassName('bullet')
const stepX = 100;
const stepY = 50;
const maxY = 450;
const maxX = 1000;
const gameScreen = document.getElementById('gameScreen')
let bulletCount = 3;
//write your code below
document.addEventListener('keyup', function(event) {
if (event.key == 'ArrowDown' && duck.offsetTop + stepY <= maxY) {
    duck.style.top = duck.offsetTop + stepY + 'px';
    duck.className = "duck-down";
}
if (event.key == 'ArrowUp' && duck.offsetTop - stepY >= 0) {
    duck.style.top = duck.offsetTop - stepY + 'px';
    duck.className = "duck-up";
}
if (event.key == 'ArrowRight' && duck.offsetLeft + stepX <= maxX) {
    duck.style.left = stepX + duck.offsetLeft + 'px';
    duck.className = "duck-right";
}
if (event.key == 'ArrowLeft' && duck.offsetLeft - stepX >= 0) {
    duck.style.left = duck.offsetLeft - stepX + 'px';
    duck.className = "duck-left";
}
});
        
duck.addEventListener('click', shoot)
gameScreen.addEventListener('click', function(){
    if (bulletCount > 0) {
        new Audio('sounds/gunShot.mp3').play();
        bullets[bulletCount -1].remove();
        //bullets[bulletCount -1].style.display = 'none';
        bulletCount--;
        if (bulletCount === 0) {
            gameOver();
        }
    }
})
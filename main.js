import { update as updateSnake , draw as drawSnake , SNAKE_SPEED , getSnakeHead , snakeIntersection } from "./snake.js";
import { update as updateFood , draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById("game");
let gameOver = false;

function mainF(currentTime) {
    if(gameOver){
         if(confirm('you lost. press ok to restart')){
            window.location = '/'
         }
         return
    }
    window.requestAnimationFrame(mainF)
    const SecSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(SecSinceLastRender < 1 / SNAKE_SPEED) return 
    lastRenderTime = currentTime ; 
    
    update()
    draw()
}

window.requestAnimationFrame(mainF)
function update(){
    updateSnake()
    updateFood()
    chackForDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}



function chackForDeath(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}

import { onSnake , expandSnake } from "./snake.js";
import { rendomGRidPosition } from "./grid.js";

let food = getRendomPosition();
const EXPANSION_RATE = 1;
export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = getRendomPosition();
    }
}

export function draw(gameBoard){
const FOOD_ELEMENT = document.createElement('div')
FOOD_ELEMENT.style.gridRowStart = food.y;
FOOD_ELEMENT.style.gridColumnStart = food.x;
FOOD_ELEMENT.classList.add('food');
gameBoard.appendChild(FOOD_ELEMENT);
}

function getRendomPosition(){
    let newFoodPostion 
    while (newFoodPostion == null || onSnake(newFoodPostion)) {
       newFoodPostion = rendomGRidPosition() 
    }
    return newFoodPostion
} 
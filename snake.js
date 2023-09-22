import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 5;
const SNAKE_BODY = [ {x: 11 , y: 11}];
let newSegmants = 0 ;

 export function update(){
    addsegments()

    const inputDirection = getInputDirection()
    for(let i = SNAKE_BODY.length - 2 ; i >= 0 ; i--){
        SNAKE_BODY[i + 1] = { ...SNAKE_BODY[i] }
    }
    SNAKE_BODY[0].x += inputDirection.x;
    SNAKE_BODY[0].y += inputDirection.y;
}

export function draw(gameBoard){
SNAKE_BODY.forEach(segmant => {
const SNAKE_ELEMENT = document.createElement('div')
SNAKE_ELEMENT.style.gridRowStart = segmant.y;
SNAKE_ELEMENT.style.gridColumnStart = segmant.x;
SNAKE_ELEMENT.classList.add('snake');
gameBoard.appendChild(SNAKE_ELEMENT);})
}

export function expandSnake(amount){
newSegmants += amount;
}

export function onSnake(position , { ignoreHead  = false} = {}){
    return SNAKE_BODY.some((segmant, index)=> {
        if(ignoreHead && index === 0) return false
        return equelPosions(segmant , position);
    })
}

export function getSnakeHead(){
 return SNAKE_BODY[0]
}

export function snakeIntersection(){
    return onSnake(SNAKE_BODY[0] , { ignoreHead : true})
}
   
function equelPosions(position1 , position2){
return position1.x === position2.x && position1.y === position2.y
}

function addsegments(){
for(let i = 0 ; i<newSegmants ; i++){
    SNAKE_BODY.push({ ...SNAKE_BODY [SNAKE_BODY.length -1] })
}
 newSegmants = 0;
}
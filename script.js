let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFoodd(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keycode == 37 && direction != "right") direction = "left";
    if(event.keycode == 38 && direction != "down") direction = "up";
    if(event.keycode == 39 && direction != "left") direction = "right";
    if(event.keycode == 40 && direction != "up") direction = "down";
}


function iniciarJogo() {
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down")] snake[0.y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i = 1; i < snake.length, i++){
        if(snake[0].x == snake[i].x && snake.[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Gamer Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFoodd();

    let snaKeX = snake[0].x;
    let snaKey = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "left") snaKey -= box;
    if(direction == "right") snaKey += box;

    if(snakeX != food.x || snakeX != food.y){
        snake.pop():
    }
    else{food.x = math.floor(math.random() * 15 +1) * box;
        food.y = math.random() * 15 + 1) * box;
    }

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeX

    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);

criarBG();
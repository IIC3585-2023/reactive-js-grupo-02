import { players } from './scripts/player';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

const grid = [
    [".",".",".",".","x",".",".",".",".",".",".",".",".","x",".",".",".","."],
    [".","x","x",".","x",".","x","x","x","x","x","x",".","x",".","x","x","."],
    [".","x",".",".",".",".",".",".",".",".",".",".",".",".",".",".","x","."],
    [".","x",".","x","x",".","x","x",".",".","x","x",".","x","x",".","x","."],
    [".",".",".",".",".",".","x",".",".",".",".","x",".",".",".",".",".","."],
    [".","x",".","x","x",".","x","x","x","x","x","x",".","x","x",".","x","."],
    [".","x",".",".",".",".",".",".",".",".",".",".",".",".",".",".","x","."],
    [".","x","x",".","x",".","x","x","x","x","x","x",".","x",".","x","x","."],
    [".",".",".",".","x",".",".",".",".",".",".",".",".","x",".",".",".","."]
];

const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

const POSWIDTH = Math.floor(canvas.width / 18);
const POSHEIGHT = Math.floor(canvas.height / 9);


const getXPixPos = (x) => x * POSWIDTH;
const getYPixPos = (y) => y * POSHEIGHT;

const drawPlayer = (player) => {
    const sprite = new Image(30, 30);
    sprite.src = player.sprite;
    console.log(player.x, player.y);
    sprite.onload = function () {
        const x = getXPixPos(player.x) + 10;
        const y = getYPixPos(player.y) + 10;
        ctx.drawImage(sprite, x, y, 30, 30);
    };
};

const updateGrid = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    players.forEach((player) => drawPlayer(player));
};

const movePlayer = (x, y, player) => {
    const posX = player.x + 1 * x;
    const posY = player.y + 1 * y;

  if (grid[posY][posX]=== "x" || grid[posY][posX]=== undefined || posX < 0 || posY > 8 || posX < 0 && posY > 17) {
    return
  }
  player.x  = posX;
  player.y = posY;
  updateGrid();
};

const RegisterInput = (control, player) => {
    const keyPress = fromEvent(document, 'keydown').pipe(
      filter((event) => event.key === control.key),
    );
    keyPress.subscribe(() => {
      movePlayer(control.x,control.y, player);
    }); 
  }
  
players.forEach((player) =>
  player.input.forEach((control) => RegisterInput(control, player))
);

updateGrid();





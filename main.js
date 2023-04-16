import { playersData } from './scripts/player';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

const grid = [
    [" ","*","*","*","X","*","*","*","*","*","*","*","*","X","*","*","*"," "],
    ["*","X","X","*","X","*","X","X","X","X","X","X","*","X","*","X","X","*"],
    ["*","X","*","*","*","*","*","*","*","*","*","*","*","*","*","*","X","*"],
    ["*","X","*","X","X","*","X","X"," "," ","X","X","*","X","X","*","X","*"],
    ["*","*","*","*","*","*","X"," "," "," "," ","X","*","*","*","*","*","*"],
    ["*","X","*","X","X","*","X","X","X","X","X","X","*","X","X","*","X","*"],
    ["*","X","*","*","*","*","*","*","*","*","*","*","*","*","*","*","X","*"],
    ["*","X","X","*","X","*","X","X","X","X","X","X","*","X","*","X","X","*"],
    ["*","*","*","*","X","*","*","*","*","*","*","*","*","X","*","*","*"," "]
];

let players = playersData
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

const drawPoints = () => {
  const sprite = new Image(30, 30);
  sprite.src = "point.svg";
  sprite.onload = function () {
    grid.forEach((row, y) => {
      row.forEach((point, x) => {
        if (point === "*") {
            ctx.drawImage(sprite, getXPixPos(x) + 10, getYPixPos(y) + 10, 20, 20);
          };
      });
    });
  };
};


const updateGrid = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPoints();
    players.forEach((player) => drawPlayer(player));
    setTimeout(() => {
      checkPoints();
      checkDeath();
    }, 100);
};
  
const movePlayer = (x, y, player) => {
  const posX = player.x + 1 * x;
  const posY = player.y + 1 * y;
    
  if (grid[posY][posX]=== "X" || grid[posY][posX]=== undefined || posX < 0 || posY > 8 || posX < 0 && posY > 17) {
    return
  }

  if (grid[posY][posX] === "*" && !player.isEnemy) {
    grid[posY][posX] = " ";
  }

  if ( x === -1 && y === 0 ) {
    player.sprite = `${player.path}/left.png`;
  }
  if ( x === 1 && y === 0 ) {
    player.sprite = `${player.path}/right.png`;
  }
  if ( x === 0 && y === -1 ) {
    player.sprite = `${player.path}/up.png`;
  }
  if ( x === 0 && y === 1 ) {
    player.sprite = `${player.path}/down.png`;
  }

  player.x  = posX;
  player.y = posY;
  updateGrid();
};

const checkPoints = () => {
  const isPointsLeft = (map) => {
    let points = 0;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === "*") {
          points++;
        }
      }
    }
    return points > 0;
  };
  if (!isPointsLeft(grid)) {
    alert("Players win!");
    location.reload();
  }
};
const checkDeath = () => {
  console.log(players);
  const enemies = players.filter((player) => player.isEnemy);
  const allies = players.filter((player) => !player.isEnemy);
  allies.forEach((ally) => {
    if (enemies.some((enemy) => enemy.x === ally.x && enemy.y === ally.y)) {
      players = players.filter((player) => player.id !== ally.id);
    }
  });
  if (players.length === 1) {
    alert(`Ghost wins!`);
    location.reload();
  }
}

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





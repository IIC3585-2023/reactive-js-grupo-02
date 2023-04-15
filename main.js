import './style.css';
import { player } from './scripts/player';

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

const canvas = document.getElementById("grid");
const ctx = canvas.getContext("2d");
const MAPWIDTH = canvas.width
const MAPHEIGHT = canvas.height

const POSWIDTH = Math.floor(MAPWIDTH / 18)
const POSHEIGHT = Math.floor(MAPHEIGHT / 9)

const getXPixPos = (x) => (x) * POSWIDTH // de 0 a 17
const getYPixPos = (y) => (y) * POSHEIGHT // de 0 a 8

console.log(getXPixPos(player.x), getYPixPos(player.y));
const pacman_img = new Image(1, 1);
pacman_img.src = "player.png";
ctx.drawImage(pacman_img, getXPixPos(player.x) , getYPixPos(player.y), 30, 30);

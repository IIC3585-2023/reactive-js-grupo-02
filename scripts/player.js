const player1 = {
    sprite: "player.svg",
    x: 0,
    y: 0,
    input: [
        {key:'ArrowDown', x:0, y:1}, 
        {key:'ArrowUp', x:0, y:-1}, 
        {key:'ArrowLeft', x:-1, y:0}, 
        {key:'ArrowRight', x:1, y:0}
    ],
};

const player2 = {
    sprite: "ghost.png",
    x: 9,
    y: 4,
    isEnemy: true,
    input: [
        {key:'s', x:0, y:1}, 
        {key:'w', x:0, y:-1}, 
        {key:'a', x:-1, y:0}, 
        {key:'d', x:1, y:0}
    ],
};

export const players = [player1, player2];

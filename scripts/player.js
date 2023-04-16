const player1 = {
    id: 1,
    path: "player-1",
    sprite: "player-1/right.png",
    x: 0,
    y: 0,
    input: [
        {key:'ArrowUp', x:0, y:-1}, 
        {key:'ArrowDown', x:0, y:1}, 
        {key:'ArrowLeft', x:-1, y:0}, 
        {key:'ArrowRight', x:1, y:0}
    ],
};

const player2 = {
    id: 2,
    path: "player-2",
    sprite: "player-2/right.png",
    x: 17,
    y: 8,
    input: [
        {key:'i', x:0, y:-1}, 
        {key:'k', x:0, y:1}, 
        {key:'j', x:-1, y:0}, 
        {key:'l', x:1, y:0}
    ],
};

const player3 = {
    id: 3,
    path: "player-3",
    sprite: "player-3/right.png",
    x: 17,
    y: 0,
    input: [
        {key:'t', x:0, y:-1}, 
        {key:'g', x:0, y:1}, 
        {key:'f', x:-1, y:0}, 
        {key:'h', x:1, y:0}
    ],
};

const player4 = {
    id: 4,
    path: "player-4",
    sprite: "player-4/right.png",
    x: 9,
    y: 4,
    isEnemy: true,
    input: [
        {key:'w', x:0, y:-1}, 
        {key:'s', x:0, y:1}, 
        {key:'a', x:-1, y:0}, 
        {key:'d', x:1, y:0}
    ],
};

export const playersData = [player1, player2, player3, player4];

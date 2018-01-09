enum Games {
    FootBall,
    VolleyBall,
    BasketBall
}

var game = Games.FootBall;
++game;
console.log(Games[game]); // Prints VolleyBall
--game;
console.log(Games[game]); // Prints FootBall
--game;
console.log(Games[game]); // Prints undefined

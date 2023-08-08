// class = A blureprint for creating objects
//         define what properties and methods they have
//         use a constructor for unique properties


class player{
    score = 0;
    pause(){
        console.log("You paused the game.")
    }
    exit(){
        console.log("You exited the game.")
    }
}

const player1 = new player();

console.log(player1.score);

player1.score += 5;
console.log(player1.score);

player1.pause();
player1.exit();

const player2 = new player();
player2.exit();

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

cards.forEach(card => console.log(card));

function shuffle(array){
    let currentIndxex = array.length;

    while (currentIndxex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndxex-=1;

        let temp = array[currentIndxex];
        array[currentIndxex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
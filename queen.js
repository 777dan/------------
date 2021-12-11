let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let newValues = [];

function shuffle(arr) {
    let rand, temp;
    for (let i = 0; i < arr.length; i++) {
        rand = Math.floor(Math.random() * (i + 1));
        temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
shuffle(values)
alert(values);

function play(values) {
    let turn = 0;
    let card;
    while (values.length > 0) {
        turn++;
        let j = 0;
        for (let i = 0; i < values.length; i++) {
            j++;
        }
        if (turn % 2 != 0) {
            alert("You're pick card!");
            card = values.pop();
            newValues[j] = card;
        }
        else {
            alert("I'm pick card!");
            card = values.pop();
            newValues[j] = card;
        }
        alert(card);
        if (card = "Q") {
            if (turn % 2 != 0) {
                alert("You won!");
                alert(newValues);
                break;
            }
            if (turn % 2 == 0) {
                alert("I won!");
                alert(newValues);
                break;
            }
        }
    }
}

play(values)
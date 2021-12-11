// let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// let newValues = [];

// function shuffle(arr) {
//     let rand, temp;
//     for (let i = 0; i < arr.length; i++) {
//         rand = Math.floor(Math.random() * (i + 1));
//         temp = arr[rand];
//         arr[rand] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }
// shuffle(values)
// alert(values);

// function play(values) {
//     let turn = 0;
//     let card;
//     while (values.length > 0) {
//         turn++;
//         let j = 0;
//         for (let i = 0; i < values.length; i++) {
//             j++;
//         }
//         if (turn % 2 != 0) {
//             alert("You're pick card!");
//             card = values.pop();
//             newValues[j] = card;
//         }
//         else {
//             alert("I'm pick card!");
//             card = values.pop();
//             newValues[j] = card;
//         }
//         alert(card);
//         if (card == "Q") {
//             if (turn % 2 != 0) {
//                 alert("You won!");
//                 alert(newValues);
//                 break;
//             }
//             if (turn % 2 == 0) {
//                 alert("I won!");
//                 alert(newValues);
//                 break;
//             }
//         }
//     }
// }

// play(values);

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

// let rand1 = Math.floor(Math.random() * 3);
// alert(rand1);
// switch (rand1) {
//     case 0:
//         alert(values.pop());
//         break;
//     case 1:
//         alert(values.shift());
//         break;
//     case 2:
//         alert(values.splice(6, 1));
//         break;
//     default:
//         alert("Error");
//         break;
// }
// let ques1;

// function random() {
//     // let rand1 = Math.floor(Math.random() * 3);
//     // alert(rand1);
//     switch (ques1) {
//         case 0:
//             alert(values.pop());
//             break;
//         case 1:
//             alert(values.shift());
//             break;
//         case 2:
//             alert(values.splice(6, 1));
//             break;
//         default:
//             alert("Error");
//             break;
//     }
// }

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
            ques1 = prompt("Если вы хотите взять карту с начала колоды, введите 0, если с середины - 1, если с конца - 2");
            ques1 = Number(ques1);
            switch (ques1) {
                case 0:
                    card = values.pop();
                    break;
                case 1:
                    card = values.shift();
                    break;
                case 2:
                    card = values.splice(6, 1);
                    break;
                default:
                    alert("Error");
                    break;
            }
            newValues[j] = card;
        }
        else {
            alert("I'm pick card!");
            let rand1 = Math.floor(Math.random() * 3);
            switch (rand1) {
                case 0:
                    card = values.pop();
                    break;
                case 1:
                    card = values.shift();
                    break;
                case 2:
                    card = values.splice(6, 1);
                    break;
                default:
                    alert("Error");
                    break;
            }
            newValues[j] = card;
        }
        alert(card);
        if (card == "Q") {
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

play(values);
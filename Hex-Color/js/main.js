'use strict';

function changeColor() {
    let hex_number = ["0", "1", "2", "3", "4", "5", "6","7", "8", "9",
        "A", "B", "C", "D", "E", "F"];
    let hexCode = '';
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random()*hex_number.length);
        hexCode += hex_number[randomIndex];
    }
    document.getElementById("hexCode").innerHTML = hexCode;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + hexCode;

}

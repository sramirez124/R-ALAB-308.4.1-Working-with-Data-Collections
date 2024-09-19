// Part 1: Refactoring Old Code
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const cells = [];
let currentCell = 0;

// Part 2: Expanding Functionality
for (let i = 0; i < csv.length; i++) {
    if(csv[i] === " , "){
        currentCell++
        continue;
    }

    if (csv[i] === " \n "){
        cells = [];
        currentCell = 1;
        continue;
    }

    if (cells[currentCell]){
    cells[currentCell] += csv[i];
    } else {
        cells[currentCell] = csv[i];
    }
}


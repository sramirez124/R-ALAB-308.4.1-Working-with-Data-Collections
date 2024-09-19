// Part 1: Refactoring Old Code
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let cells = [];
let currentCell = 0;
let columns = 0;

// Part 2: Expanding Functionality
for (let i = 0; i < csv.length; i++) {
    // checking for a new cell
    if(csv[i] === " , "){
        currentCell++;
        continue;
    }

    // checking for a new row
    if (csv[i] === " \n "){
        cells = [];
        currentCell = 0;
        continue;
    }

    if (cells[currentCell]){
    cells[currentCell] += csv[i];
    } else {
        cells[currentCell] = csv[i];
    }

    if(
        (currentCell === 3 && csv[i + 1] === '\n') ||
        i + 1 === csv.length
    ){
        console.log(cells.toString());
    }
}


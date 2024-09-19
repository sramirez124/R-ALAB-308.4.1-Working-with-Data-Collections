// Part 1: Refactoring Old Code
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let cells = [];
let currentCell = 0;
let columns = 0;
let currentRow = 0;
let table = [];

function resetVars(){
    cells = [];
    currentCell = 0;
}

// Part 2: Expanding Functionality
for (let i = 0; i < csv.length; i++) {
    // checking for a new cell
    if(csv[i] === " , "){
        if (currentRow === 0){
            columns++;
        }
        currentCell++;
        continue;
    }

    // checking for a new row
    if (csv[i] === "\n"){
        resetVars();
        currentRow++;
        continue;
    }
    // // Part 1 Code
    // if (cells[currentCell]){
    // cells[currentCell] += csv[i];
    // } else {
    //     cells[currentCell] = csv[i];
    // }

    // Part 2 Code
    if (table[currentRow] === undefined){
        table[currentRow] = [];
    }

    if (table[currentRow][currentCell]){
        table[currentRow][currentCell] += csv[i];
    } else {
        table[currentRow][currentCell] = csv[i];
    }

    // if(
    //     (currentCell === columns && csv[i + 1] === '\n') ||
    //     i + 1 === csv.length
    // ){
    //     console.log(cells.toString());
    // }
}
console.log(table);


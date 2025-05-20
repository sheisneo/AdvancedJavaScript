//Exercise 4
const numRows = 3;
const numCols = 4;

const myTable = [];
let counter = 0;

for (let i = 0; i < numRows; i++) {
    const tempTable = [];

    for (let j = 0; j < numCols; j++) {
        tempTable.push(counter);
        counter++;
    }

    myTable.push(tempTable);
}

console.table(myTable);


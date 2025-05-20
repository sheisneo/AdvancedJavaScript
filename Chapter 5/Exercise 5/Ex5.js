//Exercise 5
const totalCells = 64;
const columns = 8;
let counter = 0;

const grid = [];   // Fina grid table
let row = [];      // Temp row array

for (let i = 0; i <= totalCells; i++) {
  if (counter % columns === 0) {
    // If this is the first run or a full row
    if (row.length > 0) {
      grid.push(row); // Pushes completed row to grid
    }
    row = []; // Start a new row
  }

  row.push(counter); // Adds value to the current row
  counter++;
}

if (row.length > 0) {
  grid.push(row); // Pushes the last row if it has leftover cells
}

console.table(grid);
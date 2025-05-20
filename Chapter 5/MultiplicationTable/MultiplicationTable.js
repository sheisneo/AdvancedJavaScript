// Multiplication Table 

const table = [];            
const max = 10;              

for (let row = 1; row <= max; row++) {          
  const tempRow = [];                           

  for (let col = 1; col <= max; col++) {        //
    tempRow.push(row * col);                    
  }

  table.push(tempRow);                         
}

console.table(table); // Display as grid

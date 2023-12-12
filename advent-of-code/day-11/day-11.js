const { galaxies } = require("./day-11-data");

function expandSpace(galaxies) {
  let columns = [...galaxies[0]];
  const emptyRows = [];  
  const emptyColumns = [];

  for (let i = 1; i < galaxies.length; i++) {
    if (galaxies[i].indexOf("#") === -1) {
      emptyRows.push(i);
    }
    for (let j = 0; j < galaxies[i].length; j++) {
      if (galaxies[i][j] === "#") {
        columns[j] = "#";
      }
    }
  }
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] == ".") {
      emptyColumns.push(i);
    }
  }

  const expandedRows = galaxies.map((row, rowIndex) => {
    if (emptyRows.includes(rowIndex)) {
      return row + ".".repeat(row.length);
    } else {
      return row;
    }
  });

  const expandedGalaxies = expandedRows.map((row) => {
    let newRow = row.split("");
    emptyColumns.forEach((colIndex) => {
      newRow.splice(colIndex, 0, ".");
    });
    return newRow.join("");
  });

  console.log( expandedGalaxies, emptyRows, emptyColumns)
  return { expandedGalaxies, emptyRows, emptyColumns };

}

expandSpace(galaxies)


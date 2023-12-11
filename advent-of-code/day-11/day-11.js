const {galaxies} = require("./day-11-data")

function rowCheck (galaxies) {
    const emptyRows = []
    for (i=0; i<galaxies.length; i++){
        for(j=0; j<galaxies[i].length; j++){
            if (galaxies[i][j]==="."){
                emptyRows.push(j)
            }
        }
    }
}

function makeNewBoard(totalRows, totalCols) {
  totalRows = 10;
  totalCols = 10;
  field = [];

  // Instantiate the board
  for(var currRow = 0; currRow<totalRows; currRow++) {
    var row = []
    for(var currCol = 0; currCol<totalCols; currCol++) {
      row[currCol] = 0;
    }
    field[currRow] = row;
  }


  var bombsPres = 0;

  var randRow = 0;
  var randCol = 0;

  // Fill 25% of the board with mines in random locations (adding to the bomb count of surrounding tiles)
  while(bombsPres < 25) {
    randRow = Math.floor(Math.random()*10);
    randCol = Math.floor(Math.random()*10);

    if(field[randRow][randCol] != -1) {
      field[randRow][randCol] = -1;
      bombsPres++;

      if(randRow != 0 && randRow != (totalRows-1) && randCol != 0 && randCol != (totalCols-1)) {
        // Base Case
        field[randRow+1][randCol] += 1; // Bottom Tile
        field[randRow-1][randCol] += 1; // Top Tile
        field[randRow][randCol+1] += 1; // Left Tile
        field[randRow][randCol-1] += 1; // Right Tile
        field[randRow+1][randCol+1] += 1; // Bottom Left Tile
        field[randRow+1][randCol-1] += 1; // Bottom Right Tile
        field[randRow-1][randCol+1] += 1; // Top Left Tile
        field[randRow-1][randCol-1] += 1; // Top Right Tile
      } else if(randRow == 0 && randCol == 0) {
        // Edge case for top left corner bomb placement
        field[randRow+1][randCol] += 1;
        field[randRow][randCol+1] += 1;
        field[randRow+1][randCol+1] += 1;
      } else if(randRow == (totalRows-1) && randCol == 0) {
        // Edge case for bottom left corner bomb placement
        field[randRow-1][randCol] += 1;
        field[randRow][randCol+1] += 1;
        field[randRow-1][randCol+1] += 1;
      } else if(randRow == 0 && randCol == (totalCols-1)) {
        // Edge case for top right corner bomb placement
        field[randRow+1][randCol] += 1;
        field[randRow][randCol-1] += 1;
        field[randRow+1][randCol-1] += 1;
      } else if(randRow == (totalRows-1) && randCol == (totalCols-1)) {
        // Edge case for bottom right corner bomb placement
        field[randRow-1][randCol] += 1;
        field[randRow][randCol-1] += 1;
        field[randRow-1][randCol-1] += 1;
      } else if(randRow == 0) {
        // Edge case for top wall bomb placement
        field[randRow+1][randCol] += 1;
        field[randRow][randCol+1] += 1;
        field[randRow][randCol-1] += 1;
        field[randRow+1][randCol+1] += 1;
        field[randRow+1][randCol-1] += 1;
      } else if(randRow == (totalRows-1)) {
        // Edge case for bottom wall bomb placement
        field[randRow-1][randCol] += 1;
        field[randRow][randCol+1] += 1;
        field[randRow][randCol-1] += 1;
        field[randRow-1][randCol+1] += 1;
        field[randRow-1][randCol-1] += 1;
      } else if(randCol == 0) {
        // Edge case for left wall bomb placement
        field[randRow][randCol+1] += 1;
        field[randRow+1][randCol] += 1;
        field[randRow-1][randCol] += 1;
        field[randRow+1][randCol+1] += 1;
        field[randRow-1][randCol+1] += 1;
      } else {
        // Edge case for right wall bomb placement
        field[randRow][randCol-1] += 1;
        field[randRow+1][randCol] += 1;
        field[randRow-1][randCol] += 1;
        field[randRow+1][randCol-1] += 1;
        field[randRow-1][randCol-1] += 1;
      }
    }
  }
  return field;
};

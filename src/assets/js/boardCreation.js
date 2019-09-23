export function boardCreation(totalRows, totalCols) {
  totalRows = 10;
  totalCols = 10;
  field = [];

  // Instantiate the board
  for(var currRow = 0; currRow<totalRows; currRow++) {
    var row = [];
    for(var currCol = 0; currCol<totalCols; currCol++) {
      row.push({surrMines:0, isBomb:false, currState:0});
    }
    field.push(row);
  }
  // Values of each tile should be fairly self-explanitory, where surrMines is
  // the number of mines surrounding the tile, isBomb states if the tile is a
  // bomb itself, and currState stores the state of the tile in relation to its
  // representation (0 = hidden, 1 = revelead & 2 = flagged)

  var bombsPres = 0;

  var randRow = 0;
  var randCol = 0;

  // Fill the board with 25 mines in random locations (adding to the bomb count of surrounding tiles)
  while(bombsPres < 25) {
    randRow = Math.floor(Math.random()*totalRows);
    randCol = Math.floor(Math.random()*totalCols);

    if(field[randRow][randCol].isBomb === false) {
      field[randRow][randCol].isBomb = true;
      bombsPres++;

      if(randRow != 0 && randRow != (totalRows-1) && randCol != 0 && randCol != (totalCols-1)) {
        // Base Case
        field[randRow+1][randCol].surrMines += 1; // Bottom Tile
        field[randRow-1][randCol].surrMines += 1; // Top Tile
        field[randRow][randCol+1].surrMines += 1; // Left Tile
        field[randRow][randCol-1].surrMines += 1; // Right Tile
        field[randRow+1][randCol+1].surrMines += 1; // Bottom Left Tile
        field[randRow+1][randCol-1].surrMines += 1; // Bottom Right Tile
        field[randRow-1][randCol+1].surrMines += 1; // Top Left Tile
        field[randRow-1][randCol-1].surrMines += 1; // Top Right Tile
      } else if(randRow == 0 && randCol == 0) {
        // Edge case for top left corner bomb placement
        field[randRow+1][randCol].surrMines += 1;
        field[randRow][randCol+1].surrMines += 1;
        field[randRow+1][randCol+1].surrMines += 1;
      } else if(randRow == (totalRows-1) && randCol == 0) {
        // Edge case for bottom left corner bomb placement
        field[randRow-1][randCol].surrMines += 1;
        field[randRow][randCol+1].surrMines += 1;
        field[randRow-1][randCol+1].surrMines += 1;
      } else if(randRow == 0 && randCol == (totalCols-1)) {
        // Edge case for top right corner bomb placement
        field[randRow+1][randCol].surrMines += 1;
        field[randRow][randCol-1].surrMines += 1;
        field[randRow+1][randCol-1].surrMines += 1;
      } else if(randRow == (totalRows-1) && randCol == (totalCols-1)) {
        // Edge case for bottom right corner bomb placement
        field[randRow-1][randCol].surrMines += 1;
        field[randRow][randCol-1].surrMines += 1;
        field[randRow-1][randCol-1].surrMines += 1;
      } else if(randRow == 0) {
        // Edge case for top wall bomb placement
        field[randRow+1][randCol].surrMines += 1;
        field[randRow][randCol+1].surrMines += 1;
        field[randRow][randCol-1].surrMines += 1;
        field[randRow+1][randCol+1].surrMines += 1;
        field[randRow+1][randCol-1].surrMines += 1;
      } else if(randRow == (totalRows-1)) {
        // Edge case for bottom wall bomb placement
        field[randRow-1][randCol].surrMines += 1;
        field[randRow][randCol+1].surrMines += 1;
        field[randRow][randCol-1].surrMines += 1;
        field[randRow-1][randCol+1].surrMines += 1;
        field[randRow-1][randCol-1].surrMines += 1;
      } else if(randCol == 0) {
        // Edge case for left wall bomb placement
        field[randRow][randCol+1].surrMines += 1;
        field[randRow+1][randCol].surrMines += 1;
        field[randRow-1][randCol].surrMines += 1;
        field[randRow+1][randCol+1].surrMines += 1;
        field[randRow-1][randCol+1].surrMines += 1;
      } else {
        // Edge case for right wall bomb placement
        field[randRow][randCol-1].surrMines += 1;
        field[randRow+1][randCol].surrMines += 1;
        field[randRow-1][randCol].surrMines += 1;
        field[randRow+1][randCol-1].surrMines += 1;
        field[randRow-1][randCol-1].surrMines += 1;
      }
    }
  }
  return field;
};

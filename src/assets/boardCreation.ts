export class boardCreation {
  tiles = [];
  constructor(totalRows:number, totalCols:number){
    totalRows = 10;
    totalCols = 10;

    // Instantiate the board

    type tile = {
      surrMines: number,
      isBomb: boolean,
      currState:number
    }

    // Values of each tile should be fairly self-explanitory, where surrMines is
    // the number of mines surrounding the tile, isBomb states if the tile is a
    // bomb itself, and currState stores the state of the tile in relation to its
    // representation (0 = hidden, 1 = revelead & 2 = flagged)

    for(var currRow = 0; currRow<totalRows; currRow++) {
      var row:tile[]
      for(var currCol = 0; currCol<totalCols; currCol++) {
        row.push({ "surrMines": 0, "isBomb": false, "currState": 0 });
      }
      console.log(row)
      this.tiles.push(row);
    }

    var bombsPres = 0;

    var randRow = 0;
    var randCol = 0;

    // Fill the board with 25 mines in random locations (adding to the bomb count of surrounding tiles)
    while(bombsPres < 25) {
      randRow = Math.floor(Math.random()*totalRows);
      randCol = Math.floor(Math.random()*totalCols);

      if(this.tiles[randRow][randCol].isBomb === false) {
        this.tiles[randRow][randCol].isBomb = true;
        bombsPres++;

        if(randRow != 0 && randRow != (totalRows-1) && randCol != 0 && randCol != (totalCols-1)) {
          // Base Case
          this.tiles[randRow+1][randCol].surrMines += 1; // Bottom Tile
          this.tiles[randRow-1][randCol].surrMines += 1; // Top Tile
          this.tiles[randRow][randCol+1].surrMines += 1; // Left Tile
          this.tiles[randRow][randCol-1].surrMines += 1; // Right Tile
          this.tiles[randRow+1][randCol+1].surrMines += 1; // Bottom Left Tile
          this.tiles[randRow+1][randCol-1].surrMines += 1; // Bottom Right Tile
          this.tiles[randRow-1][randCol+1].surrMines += 1; // Top Left Tile
          this.tiles[randRow-1][randCol-1].surrMines += 1; // Top Right Tile
        } else if(randRow == 0 && randCol == 0) {
          // Edge case for top left corner bomb placement
          this.tiles[randRow+1][randCol].surrMines += 1;
          this.tiles[randRow][randCol+1].surrMines += 1;
          this.tiles[randRow+1][randCol+1].surrMines += 1;
        } else if(randRow == (totalRows-1) && randCol == 0) {
          // Edge case for bottom left corner bomb placement
          this.tiles[randRow-1][randCol].surrMines += 1;
          this.tiles[randRow][randCol+1].surrMines += 1;
          this.tiles[randRow-1][randCol+1].surrMines += 1;
        } else if(randRow == 0 && randCol == (totalCols-1)) {
          // Edge case for top right corner bomb placement
          this.tiles[randRow+1][randCol].surrMines += 1;
          this.tiles[randRow][randCol-1].surrMines += 1;
          this.tiles[randRow+1][randCol-1].surrMines += 1;
        } else if(randRow == (totalRows-1) && randCol == (totalCols-1)) {
          // Edge case for bottom right corner bomb placement
          this.tiles[randRow-1][randCol].surrMines += 1;
          this.tiles[randRow][randCol-1].surrMines += 1;
          this.tiles[randRow-1][randCol-1].surrMines += 1;
        } else if(randRow == 0) {
          // Edge case for top wall bomb placement
          this.tiles[randRow+1][randCol].surrMines += 1;
          this.tiles[randRow][randCol+1].surrMines += 1;
          this.tiles[randRow][randCol-1].surrMines += 1;
          this.tiles[randRow+1][randCol+1].surrMines += 1;
          this.tiles[randRow+1][randCol-1].surrMines += 1;

        } else if(randRow == (totalRows-1)) {
          // Edge case for bottom wall bomb placement
          this.tiles[randRow-1][randCol].surrMines += 1;
          this.tiles[randRow][randCol+1].surrMines += 1;
          this.tiles[randRow][randCol-1].surrMines += 1;
          this.tiles[randRow-1][randCol+1].surrMines += 1;
          this.tiles[randRow-1][randCol-1].surrMines += 1;
        } else if(randCol == 0) {
          // Edge case for left wall bomb placement
          this.tiles[randRow][randCol+1].surrMines += 1;
          this.tiles[randRow+1][randCol].surrMines += 1;
          this.tiles[randRow-1][randCol].surrMines += 1;
          this.tiles[randRow+1][randCol+1].surrMines += 1;
          this.tiles[randRow-1][randCol+1].surrMines += 1;
        } else {
          // Edge case for right wall bomb placement
          this.tiles[randRow][randCol-1].surrMines += 1;
          this.tiles[randRow+1][randCol].surrMines += 1;
          this.tiles[randRow-1][randCol].surrMines += 1;
          this.tiles[randRow+1][randCol-1].surrMines += 1;
          this.tiles[randRow-1][randCol-1].surrMines += 1;
        };
      };
    };
  };
};

console.log("Is this working?");

let board = new Array(6);
for (var i = 0; i < board.length; i++){
    board[i] = new Array(7).fill(0);
}
console.log(board);

function set(row, column, player) {
    board[row][column] = player;
}

//set(1,4,1);

//console.log(board[1][4]);
//console.log(board);

function render() {
    document.querySelector("#gameboard").innerHTML = '';
    let tbl = document.createElement("table");
    document.querySelector("#gameboard").appendChild(tbl);
    for(var array in board){
        // create the rows
        var row = document.createElement("tr");
        for(var i=0; i < array.length; i++){
            //create the cells
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
}

render();
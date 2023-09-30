console.log("Is this working?");

let turn = 1;
let board = new Array(7);
for (var i = 0; i < board.length; i++){
    board[i] = new Array(6).fill(0);
}
console.log(board);

function set(row, column, player) {
    board[row][column] = player;
}

let tbl;

// render the game
function render() {
    document.querySelector("#gameboard").innerHTML = '';
    tbl = document.createElement("table");
    document.querySelector("#gameboard").appendChild(tbl);
    for(var j=0; j < 7; j++){
        // create the rows
        var row = document.createElement("tr");
        for(var i=0; i < 6; i++){
            //create the cells
            var cell = document.createElement("td");
            cell.dataset.column = i;
            if(board[j][i] == 1){
                cell.className='player1';
            } else if(board[j][i] == 2){
                cell.className='player2';
            }
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    // add on-click listener
    tbl.addEventListener("click", function(event) {
        let clickedElement = event.target;
        if (clickedElement.hasAttribute("data-column")){
            let column = clickedElement.getAttribute("data-column");
            play(column);
            console.log(clickedElement.dataset.column);
        }
        render();
      });
}

// play function to insert player dots on the board
function play(column){
    for(var i=6; i > 0; i--){
        if(board[i][column] == 0){
            board[i][column] = turn;
            if(turn == 1){
                turn = 2;
            } else { 
                turn = 1
            };
            return i;
        }
    }
    return false;
}

render();

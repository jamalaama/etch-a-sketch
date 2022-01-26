let rows = document.getElementsByClassName("gridRow");

//Default size
function defaultGrid(){
        makeRows(16);
        makeColumns(16);
}

//Builds grid
function makeRows(rowLength){

        for (r = 0; r < rowLength; r++){
                let row = document.createElement("div");
                container.appendChild(row).className = "gridRow";
        };
};

function makeColumns(cellNum){
        for (c = 0; c < rows.length; c++){
                for (i = 0; i < cellNum; i++){
                        let newCell = document.createElement("div");
                        rows[i].appendChild(newCell).className = "cell";
                };
        };
};

defaultGrid();

//Changes cell colour on mouseover
const change = document.querySelectorAll(".cell");
        for (let i = 0; i < change.length; i++){
                change[i].addEventListener("mouseover", function(e){
                        e.target.style.background = 'black';
                })
        };

//Clears grid
const clear = document.querySelector(".clear");
        clear.addEventListener('click', function(e){
                for (let i = 0; i < change.length; i++){
                        change[i].style.background = 'white';
        }});
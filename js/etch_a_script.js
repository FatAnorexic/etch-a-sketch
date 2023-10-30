
function gridDiv(size=256){
    console.log(size);

    const container = document.querySelector('#container');
    for(let x=0;x<size;x++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        cell.style.width="10px";
        cell.style.height="10px";
        cell.style.color="black";
        cell.style.outline="inset"
        container.appendChild(cell);
    }
}

//Remove me later[for testing purposes]
gridDiv();

function gridDiv(size=256){
    console.log(size);

    const container = document.querySelector('#container');
    for(let x=0;x<size;x++){
        const cell=document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

gridDiv()
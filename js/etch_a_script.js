
function gridDiv(row=16, column=16){
    size=row*column;
    console.log(size);
    const container = document.querySelector('#container');
    for(let x=0;x<row;x++){
        const r=document.createElement('div');
        // r.className='row';
        container.appendChild(r);
        for(let y=0;y<column;y++){
            const c=document.createElement('div');
            c.className='column';
            r.appendChild(c);
        }
    }
    draw(size);
}

//Remove me later[for testing purposes]
gridDiv();


function draw(size){
    
}
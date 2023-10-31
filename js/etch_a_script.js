
function gridDiv(row=16, column=16){
    size=row*column;
    console.log(size);
    let thing=true;
    const container = document.querySelector('#container');
    for(let x=0;x<row;x++){
        const r=document.createElement('div');
        r.id='row';
        container.appendChild(r);
        for(let y=0;y<column;y++){
            const c=document.createElement('div');
            c.id='column';
            r.appendChild(c);
        }
    }
    draw(size);
}

//Remove me later[for testing purposes]
gridDiv();

/*
function draw(size){
    for(let x=0;x<size;x++){
        let pen=document.getElementById('column');
        pen.addEventListener('mouseenter', ()=>{
            pen.style.background='black';
        })
    }
}
*/
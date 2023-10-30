
function gridDiv(row=16, column=16){
    size=row*column;
    console.log(size);

    const container = document.querySelector('#container');
    for(let x=0;x<row;x++){
        const r=document.createElement('div');
        r.classList.add('row');
        container.appendChild(r);
        for(let y=0;y<column;y++){
            const c=document.createElement('div');
            c.classList.add('column');
            r.appendChild(c);
        }
    }
}

//Remove me later[for testing purposes]
gridDiv();
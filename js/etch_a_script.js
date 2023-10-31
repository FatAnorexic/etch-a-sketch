
function gridDiv(row=16, column=16){
    
    //As of now this does not serve a purpose, but may become handy later.
    size=row*column;
    console.log(size);
    
    const container = document.querySelector('#container');
    
    //A nested loop was chosen for its organizational capabilities. In each "row"
    //container, there are m columns->and for n rows n*m columns. It may be easier
    //to manipulate in the future. Though a grid layout would be more straight
    //forward and remove the need for nesting(which will cause bottlnecking with larger
    //sizes)
    for(let x=0;x<row;x++){

        //We avoid assigning an id or class name as we will create n*m columns
        //whereas we will only create n rows. They are merely containers for
        //each row of columns.
        
        const r=document.createElement('div');
        container.appendChild(r);

        for(let y=0;y<column;y++){
            const c=document.createElement('div');
            c.className='column';
            r.appendChild(c);
        }
    }
}

//Remove me later[for testing purposes]
gridDiv();


function draw(){
    
    let targets=document.querySelectorAll('.column');
    //Remove console later[for testing purposes]
    console.log(targets);
    targets.forEach((target)=>{
        target.addEventListener('mouseenter', ()=>{
            //Remove console later[for testing purposes]
            console.log('bounds');
            target.style.background='black';
        });
    });
}
draw();

function playerReset(){
    
}

function gridDiv(row=16, column=16){
    
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
        r.classList.add('row');
        container.appendChild(r);

        for(let y=0;y<column;y++){
            const c=document.createElement('div');
            c.className='column';
            r.appendChild(c);
        }
    }
    draw();
}


function draw(){
    let targets=document.querySelectorAll('.column');
    let rainbow=false;
    let gradient=false

    //These two simple functions use the shorthand if else statement
    //to determine if the variables are true or false upon click
    //and inverts them if they are. This winds up treating them like a
    //switch.
    document.querySelector('.rainbow').addEventListener('click',()=>{
        !rainbow ? rainbow=true:rainbow=false;
        console.log(`Rainbow: ${rainbow}`);
    });

    document.querySelector('.gradient').addEventListener('click', ()=>{
        !gradient ? gradient=true:gradient=false;
        console.log(`Gradient: ${gradient}`);
    });

    targets.forEach((target)=>{
        target.addEventListener('mouseenter', (e)=>{
            if(gradient){
                //This will slowly increase the opacity 10% every pass
                e.target.style.opacity-='-0.1';
            }
            if(rainbow){
                let color=Math.floor(Math.random()*16777215).toString(16);
                e.target.style.background=`#${color}`;

            }else{
                e.target.style.background='black';
            }
        });
    });
}

function playerReset(){
    const btn=document.querySelector('.btn');
    
    //This will allow the user to simply input their numbers and press enter
    //rather than having to then grab the mouse and move over to click reset
    //the text variable is declared inside the event, as we wish to only
    //load onto memory AFTER the key is pressed.
    document.querySelector('#number').addEventListener('keypress', function(e){
        let text=document.getElementById('number').value;
        if((e.key === 'Enter') && text!=""){
            document.querySelector('.btn').click();
        }
    });

    btn.addEventListener('click', ()=>{
        //This grabs the input from the text box. if It is an int, it's passed
        //to the game reset function. Otherwise the error alert is displayed. 
        let size=parseInt(document.getElementById("number").value);
        
        (size>100 || size <0) || !Number.isInteger(size) ? 
            alert("Error! Size cannot be greater than 100 or less than zero. it must also be a whole number"):
            gameReset(size);
        document.getElementById("number").value='';
    });
}

function gameReset(size){
    //Before we can create a new board to be populated, we first need to delete the 
    //board already in play. We do so by removing each child element within the parent
    //'#container'. Because we are oblivious to the possible size of the board at a given
    //instance, we use a while loop to iterate until all children are removed.
    let del=document.querySelector('#container');
    let child=del.lastElementChild
    while(child){
        del.removeChild(child);
        child=del.lastElementChild;
    }
    
    let row=size, col=size;
    gridDiv(row, col);
}

function main(){
    gridDiv();
    playerReset();
}

main();
function initSketch(size){
    //creating cells
    for (let i=0; i<=(size**2)-1; i++) {
        let childDiv= document.createElement('div');
        container.appendChild(childDiv);
        childDiv.classList.add('cell');
    }
    //setting up the color changing event
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        //recalculating the width of the cells
        cell.style.flexBasis = `${(500/(size))}px`;
        cell.addEventListener('mouseenter',(e) => {
            e.target.style.backgroundColor = 'red';
        })
    })
}

//deleting all the existing cells
function clearSketch(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {container.removeChild(cell)});
}

const container = document.querySelector("#container");
//creating a basic 16x16 sketch
const baseSize = 16;
initSketch(baseSize);

//setting up the RESIZE button
const sizeButton = document.querySelector("#resizeBtn");
sizeButton.addEventListener('click', ()=>{
    let newSize = prompt('Enter a new size of the sketch!');
    newSize=Number(newSize);
    //checking if a valid number was entered
    if (newSize<=0 || newSize>100|| !Number.isInteger(newSize)){
        alert('PLease, enter a valid number below 100')
    }
    else{
        //resetting the sketch
        clearSketch();
        initSketch(newSize);
    }
})


//setting up the clear button
const clearButton = document.querySelector("#clearBtn");
clearButton.addEventListener('click', ()=>{
    //calculate the current size of the sketch
    const cells = document.querySelectorAll('.cell');
    const currentSize = Math.sqrt(cells.length);   
    //delete existing sketch
    clearSketch();
    //create a new clear one
    initSketch(currentSize);
});


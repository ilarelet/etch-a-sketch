function initSketch(size){
    const container = document.querySelector("#container");
    //creating divs
    for (let i=0; i<size-1; i++) {
        let childDiv= document.createElement('div');
        container.appendChild(childDiv);
        childDiv.classList.add('cell');
    }
    //setting up the color changing event
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter',(e) => {
            e.target.style.backgroundColor = 'red';
        })
    })
}


const baseSize = 16*16;
initSketch(baseSize);

const sizeButton = document.querySelector("#resize");
sizeButton.addEventListener('click', ()=>{
    let newSize = prompt('Enter a new size of the sketch!');
    newSize=Number(newSize);
    if (newSize<=0 || newSize>100|| !Number.isInteger(newSize)){
        alert('PLease, enter a valid number below 100')
    }
    else{
        newSize=newSize**2;
        initSketch(newSize);
    }
})
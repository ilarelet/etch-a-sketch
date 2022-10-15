const container = document.querySelector("#container");
const measure = 16*16;

//creating divs
for (let i=0; i<measure; i++) {
    let childDiv= document.createElement('div');
    container.appendChild(childDiv)
    childDiv.textContent =`This is a div number ${i+1}!`
    childDiv.classList.add('cell')
}
//setting up the color changing event
const cells = document.querySelectorAll('.cell')
cells.forEach((childDiv) => {
    childDiv.addEventListener('mouseenter',(e) => {
        e.target.style.backgroundColor = 'red';
    })
})

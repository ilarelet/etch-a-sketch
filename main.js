const container = document.querySelector("#container");

const measure = 16*16;

for (let i=0; i<measure; i++) {
    let childDiv= document.createElement('div');
    container.appendChild(childDiv)
    childDiv.textContent =`This is a div number ${i+1}!`
}
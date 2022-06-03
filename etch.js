const sectionOne = document.querySelector(".sectionOne");
const gameContainer = document.querySelector(".gameContainer");
const buttond = document.querySelector(".buttond");
const headerText = document.getElementsByTagName("h1")

/* assign create button const for dom manipulation */
const blackBtn = document.createElement("button");
const greyBtn = document.createElement("button");
const rgbBtn = document.createElement("button");
const btnResize = document.createElement("button");
function divCreation ( col, rows){
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement("div");
        div.style.border = " 1px solid grey";
        gameContainer.style.gridTemplateColumns =`repeat(${col}, 1fr)`;
        gameContainer.style.gridTemplateRows =`repeat(${rows}, 1fr)`;
        gameContainer.appendChild(div).classList.add("box");
    }
}

divCreation(16, 16);

function blackColor(){
    const boxes = gameContainer.querySelectorAll(".box");
    blackBtn.textContent = "black"
    blackBtn.addEventListener("click", () => {
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            let Rcolor =  Math.floor(Math.random() * 225);
            box.style.background = "black";
            //box.style.background = `rgb(${Rcolor},${Rcolor},${Rcolor})`;
            //The above code seem to work too.
          })) 
    
    })
    buttond.appendChild(blackBtn).classList.add("btn");
}
blackColor();


function greyColor(){
    const boxes = gameContainer.querySelectorAll(".box");
    greyBtn.textContent = "grey"
    greyBtn.addEventListener("click", () => {
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            box.style.background = "grey";
          })) 
    
    })
    buttond.appendChild(greyBtn).classList.add("btn");
}
greyColor();


function rgbColor(){
    const boxes = gameContainer.querySelectorAll(".box");
    rgbBtn.textContent = "rgb"
    rgbBtn.addEventListener("click", () => {
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            let Re = Math.floor(Math.random() * 255)
            let gr = Math.floor(Math.random() * 255)
            let bl = Math.floor(Math.random() * 255)

            box.style.background = `rgb(${Re},${gr},${bl})`
          })) 
    
    })
    buttond.appendChild(rgbBtn).classList.add("btn");
}
rgbColor();

function boxReset(){
    const resetbox = gameContainer.querySelectorAll(".box");
    resetbox.forEach(box => box.remove());
}

function reSize(){
    btnResize.textContent = "Resize Grid";
    btnResize.addEventListener("click", ()=>{
       let userInput = prompt("Put a grid size choice");
       if(userInput === null || userInput < 1){
           boxReset()
           divCreation()
           greyColor()
           blackColor()
           rgbColor()

       } else{
        boxReset()
        divCreation(userInput, userInput)
        greyColor()
        blackColor()
        rgbColor()

       }
    })
buttond.appendChild(btnResize).classList.add("btn");

}
reSize();


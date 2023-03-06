const textEl = document.getElementById("text")
const text ="Customize Your Button..."
let index = 1
let speed = 100 
function writeText(){
    textEl.innerText = text.slice(0,index)
    index++
    setTimeout(writeText,speed)
    }
writeText()

const button = document.querySelector('button')
const size = document.getElementById("size")

size.addEventListener("input",function grow(){
    const sizeValue = size.value;
    button.style.fontSize = sizeValue + "px";
    button.style.width = sizeValue + "2px";
    button.style.height = sizeValue + "2px";
})

const color = document.getElementById("color")



color.addEventListener("input",function changeColor(){
    button.style.backgroundColor = color.value
})
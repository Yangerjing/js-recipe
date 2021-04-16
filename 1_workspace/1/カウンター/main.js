const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0

plusButton.onclick = function(){
    count += 1
    display.textContent = count
}


const secondDisplay = document.getElementById("second-display")
const secondButton = document.getElementById("second-button")
let count2 = 0

secondButton.onclick = function(){
    count2 -= 1
    secondDisplay.textContent = count2
}

const thirdDisplay = document.getElementById("third-display")
const thirdButton = document.getElementById("third-button")
let count3 = 1

thirdButton.onclick = function(){
    count3 *= 2
    thirdDisplay.textContent = count3
}
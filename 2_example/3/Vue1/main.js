const input = document.getElementById("input")
const button = document.getElementById("button")
const container = document.getElementById("container")

const list = JSON.parse(localStorage["list"] || "[]")

button.onclick = function(){
    const text = input.value

    list.push(text)
    localStorage["list"] = JSON.stringify(list)

    container.textContent = ""
    for (const text of list){
        const card = document.createElement("div")
        card.textContent = text
        container.appendChild(card)
    }
}
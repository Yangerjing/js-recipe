const inputElement = document.getElementsByClassName("input-todo")
const container = document.getElementsByClassName("cards-container")
const addButton = document.getElementsByClassName("add-button")

addButton.onclick = function(){
    const card = createCard(inputElement.value)
    container.append(card)
    inputElement.value = ""
}

const createCard = function(text){
    const card = document.createElement("div")
    card.className = "card"
    const toDo = document.createElement("div")
    toDo.classname = "todo"
    toDo.textContent = text
    card.append(toDo)
    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    deleteButton.onclick = function(){
        card.remove()
    }
    card.append(deleteButton)
    return card
}
console.dir(container)
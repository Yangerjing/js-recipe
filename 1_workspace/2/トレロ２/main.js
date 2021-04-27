const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function(){
    const text = inputElement.value
    const card = document.createElement("div")
    card.className = "card"
    const toDo = document.createElement("div")
    toDo.className = "todo"
    toDo.textContent = text
    card.append(toDo)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    deleteButton.onclick = function(){
        card.remove()
    }
    card.append(deleteButton)
    
    container.append(card)

    inputElement.value = ""
}
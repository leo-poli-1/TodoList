const todoContainer=document.querySelector("#todos")
const input=document.querySelector("#todos-input")
const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const todoDiv=document.createElement('div')
    todoDiv.classList.add("todo-item")
    todoDiv.setAttribute("id", Date.now()) //generam id unic pentru fiecare input
    
    const textDiv=document.createElement('p')
    textDiv.innerText=input.value
    
    const editButton=document.createElement('button')
    editButton.innerText="Edit"
    editButton.setAttribute("id","edit-button")

    const deleteButton=document.createElement('button')
    deleteButton.innerText="Delete"
    deleteButton.setAttribute("id","delete-button")

    todoDiv.appendChild(textDiv)
    todoDiv.appendChild(editButton)
    todoDiv.appendChild(deleteButton)

    todoContainer.appendChild(todoDiv)
    form.reset() 
})

todoContainer.addEventListener("click",(e)=>{
//   e.target.style.color="red" //va colora elementul pe care s-a dat click

//   pre.innerText=e.target.parentNode.getAttribute("id")

    if(e.target.getAttribute("id")==="delete-button"){
        todoContainer.removeChild(e.target.parentNode)
    }else if(e.target.getAttribute("id")==="edit-button"){
                editTodo(e)
    }else if(e.target.getAttribute("id")==="save-button"){
                saveTodo(e)
    }else if(e.target.getAttribute("id")==="cancel-button"){
                cancelTodo(e)
    }
})

function editTodo(event){
    const parent= event.target.parentNode 
    const children = parent.children
    const textDiv = children[0] ///am obtinut <p>
    const editButton = children[1] 
    const deleteButton = children[2] 

    const editInput=document.createElement("input")
    editInput.value=textDiv.innerText

    const saveButton=document.createElement('button')
    saveButton.innerText="Save"
    saveButton.setAttribute("id","save-button")

    const cancelButton=document.createElement('button')
    cancelButton.innerText="Cancel"
    cancelButton.setAttribute("id","cancel-button")

    
    parent.removeChild(textDiv)
    parent.removeChild(deleteButton)
    parent.removeChild(editButton)

    parent.prepend(editInput)
    parent.appendChild(saveButton)
    parent.appendChild(cancelButton)
}

function saveTodo(event){
    const parent= event.target.parentNode 
    const children = parent.children
    const editInput = children[0]
    const saveButton = children[1]
    const cancelButton = children[2] 

    const editButton=document.createElement('button')
    editButton.innerText="Edit"
    editButton.setAttribute("id", "edit-button")   

    const deleteButton=document.createElement('button')
    deleteButton.innerText="Delete"
    deleteButton.setAttribute("id", "delete-button")

    const textDiv=document.createElement('p')
    textDiv.innerText=editInput.value

    parent.removeChild(editInput)
    parent.removeChild(saveButton)
    parent.removeChild(cancelButton)

    parent.prepend(textDiv)
    parent.appendChild(editButton)
    parent.appendChild(deleteButton)
}

function cancelTodo(event){
    const parent= event.target.parentNode 
    const children = parent.children
    const editInput= children[0] ///am obtinut <input>
    const saveButton = children[1]
    const cancelButton = children[2] 

    const textDiv=document.createElement("p")
    textDiv.innerText=editInput.value

    const editButton=document.createElement('button')
    editButton.innerText="Edit"
    editButton.setAttribute("id", "edit-button")   

    const deleteButton=document.createElement('button')
    deleteButton.innerText="Delete"
    deleteButton.setAttribute("id", "delete-button")


    parent.removeChild(editInput)
    parent.removeChild(saveButton)
    parent.removeChild(cancelButton)

    parent.prepend(textDiv)
    parent.appendChild(editButton)
    parent.appendChild(deleteButton)
}
//in loc de edit pare cancel, save, sa fie ca simboluri
//pune in local storage ca sa stim ce sa sterge si sa editam




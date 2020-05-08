//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

//functions

function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo div

  const todoDiv = document.createElement("div")
  todoDiv.classList.add("todo")

  //create li
  const newTodo = document.createElement("li")
  newTodo.innerText = todoInput.value
  newTodo.classList.add("todo-item")
  todoDiv.appendChild(newTodo)

  //check
  const completedButton = document.createElement("button")
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completedButton.classList.add("completeBtn")
  todoDiv.appendChild(completedButton)

  //delete
  const trashButton = document.createElement("button")
  trashButton.innerHTML = '<i class="fas fa-trash"></i>'
  trashButton.classList.add("trashBtn")
  todoDiv.appendChild(trashButton)

  //append to list
  todoList.appendChild(todoDiv)

  //clear todo todoInput
  todoInput.value = "";
}

function deleteCheck(ev){
  const item = ev.target

//delete
  if(item.classList[0] === 'trashBtn'){
    const todo = item.parentElement;
    todo.remove();
  }

  //checkmark

  if(item.classList[0] === 'completeBtn'){
    const todo = item.parentElement
    todo.classList.toggle("completed");
  }
}

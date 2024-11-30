const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#addbtn");
let todoList = document.querySelector(".todoList");

let editTodo = null;

function addTodo() {
  let inputText = inputBox.value.trim();

  // checking status of add button
  if (addBtn.value === "Edit") {
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    if (inputText.length <= 0) {
      alert("Please Enter Something");
    } else {
      //creating p tag
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerHTML = inputText;
      li.appendChild(p);
      ul.appendChild(li);

      // creating edit button

      let editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.classList.add("edit");
      editBtn.classList.add("btn");
      li.appendChild(editBtn);

      // creating delete button

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Remove";
      deleteBtn.classList.add("remove");
      deleteBtn.classList.add("btn");
      li.appendChild(deleteBtn);
    }
    inputBox.value = "";
    console.log("button clicked");
  }
}

function updateTodo(e) {
  // remove todo list
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
  }
  // edit todo list
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
}

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

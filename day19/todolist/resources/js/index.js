const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector("#todo-input");
const btnAdd = document.querySelector("#btn-add");
const todoItem = document.querySelector(".todo-item");
let isUpdate = false;
let idUpdate = null;
const todos = [];
const URL = {
  TODOS: "https://jsonplaceholder.typicode.com/todos?userId=1"
}

const getAllTodos = () =>{
  return axios.get(URL.TODOS);
};

//danh sách công việc là 1 mảng và mỗi mảng là 1 obj
//id, title, status
function createId() {
  let id = Math.floor(Math.random() * 100000); //render tự động ra 1 id trong khoảng từ 0 --> 100000
  return id;
}

btnAdd.addEventListener("click", function () {
  let todoTitle = todoInput.value;
  if (todoTitle == "") {
    alert("Nội dung không được để trống !");
    return;
  }
  if (isUpdate) {
    //Update công việc
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == idUpdate) {
        todos[i].title = todoTitle;
      }
    }
    btnAdd.innerText = "THÊM";
    isUpdate = false;
    idUpdate = null;
  } else {
    //Thêm công việc
    let newTodo = {
      id: createId(),
      title: todoTitle,
      status: false,
    };

    todos.push(newTodo);
  }

  renderUI(todos);

  todoInput.value = ""; //clear công việc vừa nhập vào để nhập công việc mới
});
//create Item

const createTodoItem = ({ id, title, completed }) => {
  return `<div class="todo-item ${completed ? "active-todo" : ""}">
    <div class="todo-item-title">
      <input type="checkbox" ${completed ? "checked" : ""} onClick = "toggleStatus(${id})">
      <p>${title}</p>
    </div>
    <div class="option">
      <button class="btn btn-update" onClick = "updateTodo(${id})">
        <i class="fa-solid fa-pen-to-square icon-update"></i>
      </button>
      <button class="btn btn-delete" onClick = "deleteTodo(${id})">
        <i class="fa-solid fa-square-xmark icon-delete"></i>
      </button>
    </div>
  </div>`;
};
//render dữ liệu
const renderUI = (todos,filter) => {
  if(todos.length == ""){
    todoList.innerHTML = '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
  }else{
    todoList.innerHTML = filterTodo(todos, filter).map(createTodoItem).join("");
  }
};

function updateTodo(id) {
  let title;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      title = todos[i].title; //id truyền vào bằng id của item thì gán title = title item
    }
  }

  btnAdd.innerText = "CẬP NHẬT";
  todoInput.value = title;
  todoInput.focus(); //khi ấn vào nút update thì thay đổi luôn giá trị trong ô input

  idUpdate = id;
  isUpdate = true; //cho phép update
}
//xoá công việc
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1); // xoá phần tử tại vị trí id trùng với id trong mảng todos
    }
  }
  renderUI(todos,filter);
}

//chỉnh sửa trạng thái công việc (check box)

function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].completed = !todos[i].completed;
    }
  }
  renderUI(todos,filter);
}
//filter todos
const filterTodo = (todos, filter) => {
  switch (filter) {
    case 2: {
      return todos.filter((todo) => !todo.completed);
    }
    case 3: {
      return todos.filter((todo) => todo.completed);
    }
    default: {
      return todos;
    }
  }
};
let filter = 1;
const formOptions = document.querySelector(".todo-option");
formOptions.addEventListener("change", ()=>{
  filter = +formOptions.elements["todo-option-item"].value;
// console.log(filterTodo(todos,filter)) ;
filterTodo(todos,filter);
renderUI(todos, filter);
});

getAllTodos().then(({ data }) => {
  todos.push(...data);
  renderUI(todos, filter);
});

renderUI(todos,filter);
/**Local Storage
 * Là một phần tích hợp sẵn trong Browser giúp lưu trữ và truy vấn dữ liệu vô thời hạn trong trình duyệt của người dùng
 * Dữ liệu chỉ mất khi bạn sử dụng chức năng Clear History của trình duyệt, hoặc localStorage API để xoá
 * Local Storage không gửi thông tin lên server như Cookie
 * Local Storage cho phép bạn lưu trữ tối đa lên đến 5MB
 */

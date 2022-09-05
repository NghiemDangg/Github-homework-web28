const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector("#todo-input");
const btnAdd = document.querySelector("#btn-add");
const filterOption = document.querySelector(".todo-option");

let isUpdate = false;
let idUpdate = null;
//danh sách công việc là 1 mảng và mỗi mảng là 1 obj
//id, title, status
function createId() {
  let id = Math.floor(Math.random() * 100000); //render tự động ra 1 id trong khoảng từ 0 --> 100000
  return id;
}

let todos = [
  {
    id: createId(),
    title: "Làm slide",
    status: true,
  },
  {
    id: createId(),
    title: "Đóng tiền nhà tháng 9",
    status: false,
  },
  {
    id: createId(),
    title: "Học lập trình JavaScript",
    status: true,
  },
  {
    id: createId(),
    title: "Push up 3 hiệp mỗi hiệpp 15 lần",
    status: false,
  },
];
//Thêm công việc

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

//render dữ liệu
function renderUI(arr) {
  todoList.innerHTML = "";

  if (arr.length == 0) {
    todoList.innerHTML =
      '<p class = "todos-empty"> Không có công việc nào trong danh sách</p>';
  } else {
    //duyệt qua mảng todos để hiển thị công việc ra ngoài màn hình
    for (let i = 0; i < arr.length; i++) {
      const t = arr[i];
      todoList.innerHTML += `<div class="todo-item ${
        t.status ? "active-todo" : ""
      }">
        <div class="todo-item-title">
          <input type="checkbox" ${
            t.status ? "checked" : ""
          } onClick = "toggleStatus(${t.id})">
          <p>${t.title}</p>
        </div>
        <div class="option">
          <button class="btn btn-update" onClick = "updateTodo(${t.id})">
            <i class="fa-solid fa-pen-to-square icon-update"></i>
          </button>
          <button class="btn btn-delete" onClick = "deleteTodo(${t.id})">
            <i class="fa-solid fa-square-xmark icon-delete"></i>
          </button>
        </div>
      </div>`;
    }
  }
}

//Update công việc

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
  renderUI(todos);
}

//chỉnh sửa trạng thái công việc (check box)

function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}
//filter todos

renderUI(todos);
/**Local Storage
 * Là một phần tích hợp sẵn trong Browser giúp lưu trữ và truy vấn dữ liệu vô thời hạn trong trình duyệt của người dùng
 * Dữ liệu chỉ mất khi bạn sử dụng chức năng Clear History của trình duyệt, hoặc localStorage API để xoá
 * Local Storage không gửi thông tin lên server như Cookie
 * Local Storage cho phép bạn lưu trữ tối đa lên đến 5MB
 */

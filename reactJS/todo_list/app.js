//Local storage được lưu trữ ở dưới trình duyệt
//Giá trị được lưu trữ dưới dạng string

//localStorage.setItem('keyName',value)
//localStorage.getItem('keyName',value)

const todoList = $("#task-list");
const btnAdd = $("#btn-add-task");
const todoInput = $("#input-task-id"); //input
const todoItem = $(".task-item");
let isUpdate = false;
let idUpdate = null;
let todos = [
  {
    id: createId(),
    name: "Học Lập Trình JS",
    status: true,
  },
  {
    id: createId(),
    name: "Học Tiếng Anh",
    status: false,
  },
  {
    id: createId(),
    name: "Tập thể thao",
    status: true,
  },
  {
    id: createId(),
    name: "Tập thể thao",
    status: false,
  },
  {
    id: createId(),
    name: "Tập thể thao",
    status: true,
  },
];
//danh sách công việc là một mảng và mỗi mảng là 1 obj
// id, name, status

// create Id
function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}

//Render UI
function renderUI(array) {
  todoList.html("");
  if (array.length == 0) {
    todoList.html(
      `<p class="todos-empty">Không có công việc nào trong danh sách !</p>`
    );
  }

  for (let i = 0; i < array.length; i++) {
    const t = array[i];

    todoList.append(`
        <div class="task-item">
          <div class="task-name">
            <input type="checkbox" ${
              t.status ? "checked" : ""
            } onclick="toggleStatus(${t.id})">
            <div class="task-content">${t.name}</div>
          </div>
          <div class="task-btn">
            <a href="" onclick="updateTodo(${t.id})" id="task-edit"
              ><i class="bi bi-pencil-square"></i>
            </a>
            <a id="task-delete" onClick = "deleteTodo(${t.id})"><i class="bi bi-trash"></i></a>
          </div>
        </div>`);
  }
}

//add công việc

btnAdd.on("click", function () {
  let todoName = todoInput.val();
  if (todoName == "") {
    alert("Nội dung không được để trống");
    return;
  } else {
    let newTodo = {
      id: createId(),
      name: todoName,
      status: false,
    };
    todos.push(newTodo);
  }

  renderUI(todos);

  todoInput.val("");
});

//xoá công việc

function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
          todos.splice(i,1)
      }
  }
  renderUI(todos);
}

//thay đổi trạng thái công việc

function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].status = !todos[i].status;
    }
  }
  renderUI(todos);
}


renderUI(todos);

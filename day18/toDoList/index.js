// Cho mảng todos chứa danh sách công việc cần làm, mỗi công việc có trạng thái completed cho biết đã hoàn thành hay chưa
const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML",
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS",
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript",
  },
];
let ul = document.querySelector(".todo-list");
// Tạo 1 thẻ <li> ứng với mỗi công việc, hiển thị nội dung công việc
for (let i = 0; i < todos.length; i++) {
  let li = document.createElement("li");
  let span = document.createElement("span");

  let done = document.createElement("btn");
  done.innerHTML = "Hoàn Thành";
  done.style.border = "1px solid black";

  let remove = document.createElement("btn");
  remove.innerHTML = "Xoá";
  remove.style.border = "1px solid black";

  ul.appendChild(li);
  li.appendChild(span);
  span.innerHTML = todos[i].content;
  // Nếu đã hoàn thành, thêm class để hiển thị gạch ngang nội dung
  // Nếu đã hoàn thành, hiển thị kèm nội dung 1 nút 'Xóa'
  // Nếu chưa hoàn thành, hiển thị kèm nội dung 1 nút 'Hoàn thành'
  if (todos[i].completed == true) {
    span.classList.add("doneTask");
    li.append(remove);
  } else {
    li.append(done);
  }
}
// Hiển thị danh sách công việc vào <ul>

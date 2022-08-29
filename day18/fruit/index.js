// Cho mảng chứa danh sách các loại quả
const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];

// Tạo 1 thẻ <li> tương ứng với mỗi loại quả, hiển thị danh sách vào <ul>
let list = document.createElement("ul");
for (let i = 0; i < fruitList.length; i++) {
  let item = document.createElement("li");
  list.appendChild(item);
  item.innerHTML = fruitList[i];
}

document.getElementById("app").after(list);

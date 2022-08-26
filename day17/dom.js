// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
let changeHeading = document.querySelector("#heading");
changeHeading.style.color = "red";
changeHeading.style.textTransform = "uppercase";
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
let changePara = document.querySelectorAll(".para");
for (let i = 0; i < changePara.length; i++) {
  changePara[i].style.color = "blue";
}
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
  let para3 = document.querySelector(".para-3");
  let createLinkTag = document.createElement("a");
  createLinkTag.href = "https://vi-vn.facebook.com/";
  createLinkTag.innerText = "facebook.com";
  para3.appendChild(createLinkTag);

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
let changeTitle = document.querySelector("#title");
changeTitle.innerHTML = "Đây là thẻ tiêu đề";
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ) (Không bắt buộc, nếu làm được thì làm)
let description = document.querySelector(".description");
let addClass = description.classList;
addClass.add("text-bold");
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
let changePara3 = document.querySelector(".para-3");
let button = document.createElement("button");
button.type = "button";
button.innerText = "click me";
changePara3.parentNode.replaceChild(button,changePara3);
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let addPara2 = document.querySelector(".para-2");
let clone = addPara2.cloneNode(true);
addPara2.appendChild(clone);
// Xóa thẻ có class=“para-1”
let removePara1 = document.querySelector(".para-1");
removePara1.remove();

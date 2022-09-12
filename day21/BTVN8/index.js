//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
let heading = document.getElementById("heading");
heading.style.color = 'red';
heading.style.textTransform = 'Uppercase';
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
let para = document.querySelectorAll(".para");
for(let i = 0; i< para.length; i++){
    para[i].style.color = 'blue';
    para[i].style.fontSize = '20px';
}
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let para3 = document.querySelector(".para-3");
let link = document.createElement("a");
link.href = 'https://vi-vn.facebook.com/';
link.innerHTML = 'facebook';
para3.after(link);
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
let title = document.getElementById('title');
title.innerHTML = 'Đây là thẻ tiêu đề'
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
document.querySelector('.description').classList.add("text-bold");
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
let button = document.createElement("button");
button.type = "button";
button.innerText = "click me";
para3.parentNode.replaceChild(button,para3);
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let para2 = document.querySelector(".para-2");
let clone = para2.cloneNode(true);
para2.after(clone);
// Xóa thẻ có class=“para-1”
document.querySelector('.para-1').remove();
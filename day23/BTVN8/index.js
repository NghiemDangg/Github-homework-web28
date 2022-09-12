//Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const $h1 = $("#heading");
$h1.css({ color: "red", textTransform: "uppercase" });
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const $para = $(".para");
$para.css({ color: "blue" });
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const $para3 = $(".para-3");
const $link = $("<a/>",{href: "https://vi-vn.facebook.com/",text: "facebook",});
$para3.after($link);
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const $title = $("#title");
$(title).html("Đây là thẻ tiêu đề");
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
$(".description").addClass("text-bold");
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
$para3.replaceWith("<button>click me</button>");
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const $para2 = $(".para-2");
$para2.after($para2.clone());
// Xóa thẻ có class=“para-1”
$(".para-1").remove();

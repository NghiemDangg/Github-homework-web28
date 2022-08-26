const heading = "Thầy giáo Ba đẹp trai";
const avatar = "https://i.imgur.com/2rP9dFO.png";
const profile = "https://twitter.com/banx9x";
// 1. Thay đổi nội dung của thẻ title thành giá trị của heading
let nodeTitle = document.querySelector("title");
nodeTitle.textContent = heading;
// 2. Thay đổi nội dung của thẻ h1 thành giá trị của heading
let nodeHeading = document.querySelector(".heading");
nodeHeading.innerHTML = heading;
// 3. Thay đổi src của thẻ img thành giá trị của avatar
let nodeImg = document.querySelector(".avatar");
nodeImg.src = avatar;
// 4. Thay đổi src của thẻ link thành giá trị của profile
let nodeLink = document.querySelector(".profile");
nodeLink.href = profile;
// 5. Thay đổi nội dung của thẻ li đầu tiên trong thẻ ul thành Code application
let nodeUl = document.querySelectorAll("ul li");
let lastIndex = nodeUl.length - 1;
nodeUl[0].textContent = "Code application";
// 6. Thay đổi nội dung của thẻ li cuối cùng trong thẻ ul thành Sleep
nodeUl[lastIndex].textContent = "Sleep";
// 7. Thay đổi nội dung của div thành thời gian hiện tại theo mẫu Bây giờ là giờ:phút:giây,
// ngày ngày/tháng/năm
let now = new Date();
let currentTime = now.toLocaleString("vi-VN");

let nodeDiv = document.querySelector(".clock");
let createNode = document.createElement("p");
createNode.innerHTML = currentTime;
nodeDiv.appendChild(createNode);
// 8. Đếm số từ trong đoạn văn p.bio xem có bao nhiêu từ Ba (không phân biệt chữ hoa chữ
// thường) và thêm nội dung vào thẻ p.num-of-words bên dưới thông báo kết quả dạng Ở đoạn
// văn trên có xx từ 'Ba'
let nodePara = document.querySelector(".bio").textContent.toLowerCase();
let count = nodePara.split("ba").length - 1;
document.querySelector(".num-of-words").textContent = count;
// 9. Thêm một hàng mới vào table (tham khảo API của HTMLTableElement)
let table = document.querySelector(".list-students");
table.style.border = "1px solid black";
let row = table.insertRow(0);
// 10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung Thầy giáo Ba siêu cấp đẹp trai
let cell = row.insertCell(0);
cell.innerHTML = "Thầy giáo Ba siêu cấp đẹp trai";
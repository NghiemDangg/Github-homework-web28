let para = document.getElementById("para");
let paraArr = [];
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
let highLight = para.textContent.toLowerCase().split(" ");
// console.log(highLight);
for(let i = 0; i < highLight.length ; i++){
   if(highLight[i].length >= 8){
   highLight.push(paraArr);
   }
}

console.log(paraArr);
// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
let linkTag = document.createElement("a");
linkTag.href = "https://www.facebook.com/";
linkTag.innerText = "Facebook";
para.appendChild(linkTag);
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

// Thay thế các ký hiệu ? => 🤔, ! => 😲
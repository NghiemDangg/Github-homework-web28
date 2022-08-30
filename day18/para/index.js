let para = document.getElementById("para");
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)
// tạ
let words = para.textContent.split(" ");

const replace = words.map((w) => {
  const punc = w[w.length -1];
  if(isAlphabet(punc)){
    return w.length >= 8
    ? `<span style = "background-color: yellow;"> ${w}</span>`
    : w;
  }else{
    const temp = w.slice(0,w.length -2);
    return temp.length >= 8
    ? `<span style = "background-color: yellow;"> ${temp}</span>${punc}`
    : w; 
  }
});
para.innerHTML = replace.join(" ");

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
let linkTag = document.createElement("a");
linkTag.href = "https://www.facebook.com/";
linkTag.innerText = "Facebook";
para.after(linkTag);

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
let createNode = document.createElement("div");
// createNode.innerHTML = "Có " +  + " từ trong đoạn văn";
linkTag.after(createNode);
// Thay thế các ký hiệu ? => 🤔, ! => 😲

function isAlphabet(char) {
  return ("a" <= char && char <= "z") || ("A" <= char && char <= "Z");
}

para.innerHTML = para.innerHTML.replaceALL("?","🤔");
para.innerHTML = para.innerHTML.replaceALL("!","😲");
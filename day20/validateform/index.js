const pswInput = document.getElementById("password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const message = document.getElementById("message");

//Khi người dùng click vào form password, hiển thị message
pswInput.onfocus = () => {
  message.style.display = "block";
};
//Khi người dùng click ra ngoài , ẩn message
pswInput.onblur = () => {
  message.style.display = "none";
};
//Khi người dùng bắt đầu nhập mật khẩu
pswInput.onkeyup = () => {
  //xác thực những ký tự in thường
  let lowerCaseLetters = /[a-z]/g;
  if (pswInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Xác thực những ký tự in hoa
  var upperCaseLetters = /[A-Z]/g;
  if (pswInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // xác thực những chữ số
  var numbers = /[0-9]/g;
  if(pswInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Xác thực độ dài
  if(pswInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};

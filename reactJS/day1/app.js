// Kiểm tra chuỗi đỐi xứng

function checkReversed(str) {
  let string1 = "";
  string1 = str.toLowerCase().split("").reverse("").join("");
  let string2 = str.toLowerCase();
  return string1 == string2;
}

function checkReversed2(str) {
  if (str.length <= 1) {
    return true;
  }
  for (let i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(checkReversed2("tvt"));
console.log(checkReversed2("tvt2"));

/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
function capitalize(str) {
  let strCapitalize;
  let newStr = "";
  newStr = str.trim();
  strCapitalize =
    newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase();
  return strCapitalize;
}

console.log(capitalize("  javascript is Fun "));
console.log(capitalize(" javascript is Fun     "));
console.log(capitalize(" javascript is Fun"));

/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
function title(str) {
  let newStr = "";
  newStr = str.trim();
  let convertToArray = newStr.toLowerCase().split(" "); //chuyển chuỗi về dạng mảng và ký tự thường
  let result = convertToArray.map(function (value) {
    //dùng map để xử lý từ của mảng vừa split
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase()); //chuyển ký tự đầu tiên của mỗi từ viết thường thành viết hoa
  });
  return result.join(" "); //join để chuyển mảng về chuỗi
}

console.log(title(" javaScript iS fUn "));
console.log(title(" javaScript iS fUn"));
console.log(title("javaScript iS fUn "));

/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
function countVowel(str) {
  let count = 0;
  let vowel_list = 'euoaiEUOAI';
  for(let i = 0; i < str.length ; i++ ){
    if(vowel_list.indexOf(str[i]) !== -1){
      count += 1;
    }
  }
  return count;
}
console.log(countVowel("nguyen am cac thu oai oai"));
/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
function randomColor() {
  const colors = [
    "#00adfd",
    "#ffa400",
    "#07a777",
    "#ff7870",
    "#e890cc",
    "#000000",
    "#cccccc",
    "#e76c90",
    "#e7809c",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
console.log(randomColor());
/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
function reverseWords(str) {
  let newStr = "";
  newStr = str.trim();
  let convertToArray = newStr.split(" "); //chuyển chuỗi về dạng mảng và ký tự thường
  let result = convertToArray.reverse();
  return result.join(" "); //join để chuyển mảng về chuỗi
}
console.log(reverseWords(" The fox is comming for the chicken "));
/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
function parameterize(str) {
  let newStr = "";
  newStr = str.trim();
  let convertToArray = newStr.toLowerCase().split(" "); //chuyển chuỗi về dạng mảng và ký tự thường
  let result = convertToArray.join("-");
  return result; //join để chuyển mảng về chuỗi
}
console.log(parameterize("JavaScript IS fun"));
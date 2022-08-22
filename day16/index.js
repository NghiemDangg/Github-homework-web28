//xử lý số
/**
 * Bài 1 viết hàm tính thể tích hình cầu
 *
 * @param {number} r bán kính hình cầu
 * @return {number} thể tích hình cầu
 */
function sphericalVolume(r) {
  let pi = 3.14;
  let Volume = (4 * pi * Math.pow(r, 3)) / 3;
  return Volume;
}
console.log(sphericalVolume(4));

/**
 * Bài 2 Viết hàm truyền vào 2 số nguyên, tính tổng các số nguyên nằm giữa chúng
 *
 * @param {number} a Số nguyên a
 * @param {number} b Số nguyên b
 *
 * @return {number} Tổng các số nguyên nằm ở giữa a và b
 */
function sumBetween(a, b) {
  let sum = 0,
    i;
  for (i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumBetween(3, 8));

/**
 * Bài 3: tính tổng ước số:
 *
 * @param {number}  a Số nguyên dương a
 *
 *
 * @return {number} Tổng ước số của a
 */

function sumOfDivisor(a) {
  let sum = 0;
  for (i = 0; i <= a; i++) {
    if (a % i == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfDivisor(90));

/**
 * Bài 4: Kiểm tra số nguyên tố
 *
 * @param {number}  a Số nguyên dương a
 *
 *
 * @return {boolean} a có phải số nguyên tố không
 */

function checkPrime(a) {
  let flag = true;
  if (a < 2) {
    flag = false;
  } else {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i == 0) {
        flag = false;
      }
    }
  }
  return flag;
}

console.log(checkPrime(3));
console.log(checkPrime(13));

/**
 * Bài 5: Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
 *
 * @param {number}  a Số nguyên dương a
 *
 *
 * @return {number} Tổng các số nguyên tố nhỏ hơn hoặc bằng a
 */

function sumPrime(a) {
  let sum = 0;
  for (let i = 2; i <= a; i++) {
    if (checkPrime(a) == true) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(sumPrime(3));
console.log(sumPrime(5));
console.log(sumPrime(97));

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

console.log(title(" HELLO wOrLd "));
console.log(title(" helLo WoRLd"));
console.log(title("HelLo wOrLd "));

/**
 * Chuyển đổi chuỗi thành dạng Spinal case
 *
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi Spinal case
 *
 */

function spinalCase(str) {
  let string1 = "";
  string1 = str.trim();
  let string2 = string1.toLowerCase().split(" ");
  let result = string2.join("-");
  return result;
}

console.log(spinalCase(" HELLO wOrLd "));
console.log(spinalCase(" helLo WoRLd"));
console.log(spinalCase("HelLo wOrLd "));

/**
 * Kiểm tra chuỗi đối xứng
 *
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {boolean} chuỗi đối xứng ?
 *
 */

function isPalindrome(str) {
  let string1 = "";
  string1 = str.toLowerCase().split("").reverse().join("");
  let string2 = str.toLowerCase();
  return string1 === string2;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("anna"));
console.log(isPalindrome("không biết"));

/**
 * Kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không
 *
 *
 * @param {string} str1 Chuỗi cha
 * @param {string} str2 Chuỗi con
 *
 * @returns {boolean} chuỗi cha có chứa chuỗi con không ?
 *
 */

function checkString(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  let flag = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      flag = true;
    }
    return flag;
  }
}
console.log(checkString("Hello world", "Hello2222"));
//Xử lý mảng
/**
 *Loại bỏ các giá trị sai trong 1 mảng
 *
 *
 * @param {arr[]} arr mảng bất kỳ
 *
 *
 * @returns {arr[]} arr mảng loại bỏ giá trị sai
 *
 *
 */

function removeValue(arr) {
  const result = [];
  let str = "";
  const arr2 = [false, null, undefined, NaN, 0,str];
  for (let i of arr) {
    if (!arr2.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(removeValue([false, 1, 3, NaN, 5, 6,"", "hehe"]));
/**
 *Lọc ra các phần tử có độ dài lớn nhất
 *
 *
 * @param {arr[]} arr mảng bất kỳ
 *
 *
 * @returns {arr[]} arr mảng lọc ra phần tử có độ dài lớn nhất
 *
 *
 */

//  function filterArray(arr){
//   const result = [];

//   for(let i of arr){
//     arr[i].length();
//   }
//  }

//  console.log(filterArray(['aba', 'aa', 'ad', 'c', 'vcd'] ));


//xử lý đối tượng
const student = [
  { name: "Đăng", Age: "20" },
  { name: "Ba", Age: "19" },
  { name: "Cường", Age: "25" },
  { name: "Hà", Age: "21" },
  { name: "Đạt", Age: "28" },
  { name: "Phi", Age: "14" },
  { name: "Thiên", Age: "29" },
  { name: "Tùng", Age: "20" },
  { name: "Tường", Age: "29" },
  { name: "Trường", Age: "14" },
];
/**
 * Tính ra số tuổi trung bình của toàn bộ sinh viên.
 *
 *
 * @param {arr[]} arr mảng chứa đối tượng sinh viên
 *
 * @return {number} tuổi trung bình của toàn bộ sinh viên
 */

function avgObj(arr){
  let sum = 0;
  let amount = Object.keys(arr).length;
  for(let value in arr){
    sum += arr.value;
  }
  let result = (sum)/(amount);
  return result;
}
console.log(avgObj(student));

/**
 * Sắp xếp lại mảng trên theo tuổi
 *
 *
  @param {arr[]} arr mảng chứa đối tượng sinh viên
 *
 * @return {arr[]} sắp xếp mảng theo tuổi
 */

function sortAge(arr){
  arr.sort(function(arr1,arr2){
    if(arr1.Age < arr2.Age){return -1;}
    if(arr1.Age > arr2.Age){return 1;}
  });
}

console.log(sortAge(student));
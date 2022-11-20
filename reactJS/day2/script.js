/**
 * Viết function đảo ngược một số
 */

function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}


/**
 * 2, Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
 * Sample function : Longest_Country_Name([“Australia”, “Germany”, “United States of America”])
 * Expected output : “United States of America”
 */
function get_Name(arr) {
  return arr.reduce(function (longest_name, country) {
    return longest_name > country.length ? longest_name : country;
  }, "");
}
console.log(get_Name(["Australia", "Germany", "United States of America"]));
/**
 * 3, Write a JavaScript function to extract unique characters from a string.
 * Example string : “thequickbrownfoxjumpsoverthelazydog”
 * Expected Output : “thequickbrownfxjmpsvlazydg”
 */

function uniqueCharacters(str1) {
  let uniqChar = ""; //tạo một chuỗi rỗng
  let str = str1; // gán chuỗi đầu vào bằng 1 chuỗi khác
  for (let i = 0; i < str.length; i++) {
    if (uniqChar.indexOf(str[i]) === -1) {
      //Kiểm tra xem thằng uniqChar có chứa ký tự giống trong thằng str không, nếu indexOf() không tìm thấy ký tự đó thì dẽ trả về -1
      uniqChar += str[i]; //thêm ký tự đó vào chuỗi uniqChar
    }
  }
  return uniqChar;
}
//  console.log(uniqueCharacters("êuueueutheeeee"));
/**
 * 4, There are two arrays with individual values,
 *  write a JavaScript program to compute the sum of each individual index value from the given arrays.
 * Sample array :
 * array1 = [1,0,2,3,4];
 * array2 = [3,5,6,7,8,13];
 * Expected Output : [4, 5, 8, 10, 12, 13]
 */

function Arrays_sum(arr1, arr2) {
  let result = [];
  let i = 0;

  if (arr1.length === 0) {
    return "array 1 is empty";
  }
  if (arr2.length === 0) {
    return "array 2 is empty";
  }

  //Sum of 2 arrays (if length of array1 = length array2)

  while (i < arr1.length && i < arr2.length) {
    result.push(arr1[i] + arr2[i]);
    i++;
  }

  //if length of array1 < length array2

  if (i === arr1.length) {
    for (i; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  }
  //if length of array2 < length array1

  if (i === arr2.length) {
    for (i; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }
  return result;
}

// console.log(Arrays_sum([1, 2], [1, 2, 3]));
/**
 * 5, Write a JavaScript function to repeat a string a specified times.
 * Test Data :
 * console.log(repeat_string(‘a’, 4));
 * console.log(repeat_string(‘a’));
 * Output :
 * “aaaa”
 * “Error in string or count.”
 */
function repeatString(string, count) {
  if (string == null || count == null || count === Infinity || count < 0) {
    return "Error in string or count.";
  }
  count = count | 0;
  return new Array(count + 1).join(string);
}

// console.log(repeatString("a", 4));
// console.log(repeatString("a"));
// console.log(repeatString("a", -2));
// console.log(repeatString("a", Infinity));
/**
 *6
 * Write a JavaScript program to count number of words in string. Go to the editor
 * Note :
 * Remove white-space from start and end position.
 * Convert 2 or more spaces to 1.
 * Exclude newline with a start spacing.
 * input: " The quick brown fox "
 * output: 4
 */

function countWords(string) {
  string = string.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  string = string.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  string = string.replace(/\n /, "\n"); // exclude newline with a start spacing
  return string.split(" ").filter(function (str) {
    return str != "";
  }).length;
  //return s.split(' ').filter(String).length; - this can also be used
}
console.log(countWords(" The quick brown fox "));

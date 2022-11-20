/**exercise 1. Write a JavaScript program which prints
the elements of the following array.*/

function printElement() {
  let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];

  for (let i in a) {
    console.log("row " + i);
    for (let j in a[i]) {
      console.log(a[i][j]);
    }
  }
}
// printElement();

/**exercise 2. Write a JavaScript program
to find the sum of squares of a numeric vector. */

function sumOfSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
  }
  return sum;
}
// console.log(sumOfSquares([0, 1, 2, 3, 4, 5]));

/**exercise 3. Write a JavaScript program to compute
 the sum and product of an array of integers. */
function sumAndProduct(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
  console.log("Sum: " + sum + "\n" + "product: " + product);
}

// sumAndProduct([1, 2, 3, 4, 5, 6]);

/**exercise 4. Write a JavaScript program to
remove duplicate items from an array */

function removeDuplicate(arr) {
  let uniqueSet = new Set(arr);

  const backToArray = [...uniqueSet];

  return backToArray;
}
// console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5, 2, 7]));

/**exercise 5. Write a JavaScript program to display the colors in the following way :
 * "1st choice is Blue ."
 * "2nd choice is Green."
 * "3rd choice is Red."
 * */

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function displayColorList(color) {
  function Ordinal(n) {
    let ord = ["th", "st", "nd", "rd"];
  }

  for (let i = 0; i < color.length; i++) {
    let ordinal = i + 1;
    let output = Ordinal(ordinal) + " choise is " + color[n] + " .";
    console.log(output);
  }
}

/**exercise 6. Write a JavaScript program to find the leap years
 in a given range of years. */

function leap_year_range(st_y, end_y) {
  let year_range = [];
  let leap_year_list = [];

  function test_leapYear(year) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 == 0 && year % 400 === 0)
    ) {
      return year;
    } else {
      return false;
    }
  }

  for (let i = st_y; i <= end_y; i++) {
    year_range.push(i);
  }

  year_range.forEach(function (year) {
    if (test_leapYear(year)) {
      leap_year_list.push(year);
    }
  });
  return leap_year_list;
}

// console.log(leap_year_range(2000, 2004));

/**exercise 7. Write a JavaScript program to shuffle an array. */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomNum = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[randomNum];
    arr[randomNum] = temp;
  }
  return arr;
}

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));


/**exercise 8. Write a JavaScript program to perform a binary search. */
/**exercise 9. There are two arrays with individual values, write a JavaScript program to compute
the sum of each individual index value from the given arrays. */

function Arrays_sum(arr1,arr2){
  let result = [];
  let number = 0;
  let x = 0;
  if (arr1.length === 0){
    return "array 1 is empty";
  }
  if (arr2.length === 0){
    return "array 2 is empty";
  }

  while(number < arr1.length && number < arr2.length){
    result.push(arr1[number] + arr2[number]);
    number++;
  };
  return result;
}

console.log(Arrays_sum([1,0,2,3,4],[3,5,6,7,8,13]));
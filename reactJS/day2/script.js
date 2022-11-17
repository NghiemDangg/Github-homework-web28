/**1. Write a JavaScript program which prints
the elements of the following array.*/

function exercise() {
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
exercise();

/**Write a JavaScript program
to find the sum of squares of a numeric vector. */

function exercise1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 2);
  }
  return sum;
}
console.log(exercise1([0, 1, 2, 3, 4, 5]));

/**Write a JavaScript program to compute
 the sum and product of an array of integers. */
function exercise2(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }
 console.log('Sum: ' + sum + '\n' + 'product: ' + product);
}

exercise2([1,2,3,4,5,6]);



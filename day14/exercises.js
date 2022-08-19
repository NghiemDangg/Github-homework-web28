/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */

let myArr = [2, 3, 5, 1, 9, 6, 8, 6, 3, 4, 92, 344, 222, 1121];
let myArr2 = [223, 553, 11, 213, 4342, 656];
function min(arr) {
  let lengthArr = arr.length;
  let minimum = arr[lengthArr - 1];
  while (lengthArr--) {
    if (arr[lengthArr] < minimum) {
      minimum = arr[lengthArr];
    }
  }
  return minimum;
}
console.log("Min: ");
console.log(min(myArr));
/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
  let lengthArr = arr.length;
  let maximum = arr[lengthArr - 1];
  while (lengthArr--) {
    if (arr[lengthArr] > maximum) {
      maximum = arr[lengthArr];
    }
  }
  return maximum;
}
console.log("Max: ");
console.log(max(myArr));

/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {
  let result = [min(arr), max(arr)];
  return result;
}
console.log("MinMax: ");
console.log(minMax(myArr));
/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
  return arr;
}
console.log("Swap: ");
console.log(swap(myArr, 0, 1));
/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  const result = [];
  for (let i of arr1) {
    if (arr2.includes(i)) {
      result.push(i);
    }
  }
  return result;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 5, 7];
console.log("Intersection: ");
console.log(intersection(arr1, arr2));

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
  const result = [];
  for (let i of arr1) {
    if (!arr2.includes(i)) result.push(i);
  }
  for (let j of arr2) {
    if (!arr1.includes(j)) result.push(j);
  }
  return result;
}
console.log("Difference: ");
console.log(difference(arr1, arr2));
/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  // arr.splice(0,arr.length,...new Set(arr));
  //hoặc
  // const uniqSet = new Set(arr); //chuyển mảng thành set để xoá phần tử trùng
  // let result = Array.from(uniqSet); //chuyển lại set thành mảng
  // return result;
  //Hoặc
  const temp=[];
  for (let i of arr){ //sao chép các giá trị sang temp (loại bỏ các giá trị trùng lặp)
     if(!temp.includes(i)){
      temp.push(i);
     }
  }
  arr.length = 0;//loại bỏ hết các giá trị có trong arr
  for (let i of temp){//đẩy ngược lại các giá trị trong temp sang arr
    arr.push(i);
  }
}
console.log("Remove Duplicate: ");
console.log(removeDuplicate(myArr));

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[arr.length - 2];
}
console.log("Second Large: ");

console.log(secondLargest(myArr2));

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {
  var i = arr.length,
    j,
    temp;
  if (i == 0) return arr;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
console.log("Shuffle: ");
console.log(shuffle(myArr2));

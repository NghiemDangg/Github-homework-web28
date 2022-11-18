const input = document.getElementById("input-box");
const btn_add = document.getElementById("btn1");
const btn_display = document.getElementById("btn2");
const result = document.getElementById("result");

let x = 0;
let arr = Array();

// add
btn_add.addEventListener("click", add_element);
function add_element() {
  arr[x] = input.value;
  alert("Element: " + arr[x] + " Added at index " + x);
  x++;
  input.value = "";
}
// display
btn_display.addEventListener("click", display_list);
function display_list() {
  let e = "<div></div>";

  for (let i = 0; i < arr.length; i++) {
    e += "Element " + i + " = " + arr[i];
  }
  result.innerHTML = e;
}

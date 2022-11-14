// Kiểm tra chuỗi đỐi xứng

function checkReversed(str){
    let string1 = "";
    string1 = str.toLowerCase().split("").reverse("").join("");
    let string2 = str.toLowerCase();
    return string1 == string2;
}
console.log(checkReversed("tvt"));
console.log(checkReversed("tvt2"));

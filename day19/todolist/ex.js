if(typeof(Storage) !== "undefined"){
    console.log("có hỗ trợ");
}else{
    console.log("không hỗ trợ");
}
localStorage.setItem('name','Nghiêm Đăng');//lưu dữ liệu vào local storage
localStorage.setItem('name','Nghiêm Hoàng');//lưu dữ liệu vào local storage
localStorage.setItem('number',2);//lưu dữ liệu vào local storage
localStorage.setItem('isStatus',false);//lưu dữ liệu vào local storage
let name = localStorage.getItem('name');//lấy dữ liệu từ localstorage ra
let count = localStorage.length;//lấy ra số lượng phần tử được lưu trong localstorage
localStorage.removeItem('name');//xoá biến(key) trong localStorage
localStorage.clear;//xoá toàn bộ thành phần bên trong

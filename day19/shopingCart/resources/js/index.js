/**
 * Các chức năng cần có cho ứng dụng :
 * Render danh sách sản phẩm từ 1 data có sẵn
 * Cập nhật số lượng sản phẩm hiện có trong giỏ hàng
 * Xóa sản phẩm khỏi giỏ hàng
 * Thay đổi số lượng sản phẩm
 * Cập nhật tổng tiền
 * Áp dụng mã giảm giá
 * */
let subTotalEl = document.querySelector('.subtotal span');
let vatEl = document.querySelector('.vat span');
let totalEle = document.querySelector('.total span');
let discount = document.querySelector ('.discount');
let discountEle = document.querySelector('.discount span');
//random id ngẫu nhiên trong khoảng 0 -> 100000
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

function randomId() {
  return Math.floor(Math.random() * 100000);
}

// Random id ngẫu nhiên trong khoảng 0 -> 100000
function randomId() {
  return Math.floor(Math.random() * 100000);
}

// Danh sách sản phẩm
let products = [
  {
    id: randomId(),
    name: "Áo thun tay lỡ Travis Scott Unisex phong cách Hiphop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 250000,
    image: "https://cf.shopee.vn/file/917707b7e4680052087e18b4e254bd33",
    count: 1,
  },
  {
    id: randomId(),
    name: "Quần dài ống suông rộng phong cách hiphop ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 350000,
    image: "https://cf.shopee.vn/file/1a6beef2ae4441645b0bd0ad8ebc2889",
    count: 1,
  },
  {
    id: randomId(),
    name: "Quần kaki ống rộng túi hộp màu xanh rêu",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 280000,
    image: "https://cf.shopee.vn/file/c91af4400c3e916938f581a26415df83",
    count: 1,
  },
  {
    id: randomId(),
    name: "HOODIE LOVE (form unisex nam và nữ)",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 165000,
    image: "https://cf.shopee.vn/file/2feb9efb553a6f666a888a5c47852ee8",
    count: 1,
  },
];

//Danh sách promotion code (Mã giảm giá)
let promotionCode = {
    GIAM10PHANTRAM: 10,
    GIAM20PHANTRAM: 20,
    GIAM30PHANTRAM: 30,
    GIAM40PHANTRAM: 40,
}

//Cập nhật số lượng sản phẩm
function updateTotalItem(arr) {
  let total = 0; //ban đầu số lượng sản phẩm = 0
  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    total += p.count; //mỗi vòng lặp chúng ta sẽ cộng dồn giá trị của total với thuộc tính count của từng sản phẩm
  }
  return total;
}
//Render UI

let productsEle = document.querySelector(".products");
function renderUI(arr) {
  productsEle.innerHTML = "";
  //cập nhật số lượng sản phẩm trong cart
  let countEle = document.querySelector(".count");
  countEle.innerText = `${updateTotalItem(arr)} item in the bag`;

  updateTotalMoney(arr);
  
  if (arr.length == 0) {
    productsEle.insertAdjacentHTML(
      "afterbegin",
      "<li>Không có sản phẩm nào trong giỏ hàng</li>"
    );
  }

  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    productsEle.innerHTML += `<li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${p.image}" alt="${p.name}" />
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${p.name}</a></div>
                <div class="description">
                    ${p.description}
                </div>
                <div class="price">${convertMoney(p.price)}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <input type="number" 
                class="quantity" step="1"
                value="${p.count}" 
                onChange = "changeTotalProduct(${p.id},event)">
            </div>

            <div class="remove">
                <span class="close" onClick = "removeItem(${
                  p.id
                })"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>
        </div>
    </li>`;
  }
}
//Xoá item

function removeItem(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  renderUI(products);
}
//Thay đổi số lượng sản phẩm
function changeTotalProduct(id, e) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].count = Number(e.target.value);
    }
  }
  renderUI(products);
}

//Cập nhật tổng tiền 
function updateTotalMoney(arr){
    //tính tổng tiền cart
    let totalMoney = 0; //Tổng tiền
    let discountMoney = 0; //Tổng tiền giảm giá

    for(let i = 0; i < arr.length ; i++){
        const p = arr[i];
        totalMoney += p.count * p.price;
    }

    //Có mã giảm giá không 
    //Mã giảm giá có hợp lệ không
    let data = checkPromotion ();
    if(data){
        discountMoney = (totalMoney * data)/100;
        discount.classList.remove ('hide');
    }else{//mã giảm giá không chính xác thì ẩn đi
        discount.classList.add('hide');
    }
    //Cập nhật tiền lê UI
    subTotalEl.innerText = convertMoney (totalMoney);
    vatEl.innerText = convertMoney (totalMoney * 0.05);
    discountEle.innerText = convertMoney (discountMoney);
    totalEle.innerText = convertMoney (totalMoney * 1.05 - discountMoney);
}
//Kiểm tra mã giảm giá
let inputPromotion = document.querySelector('#promo-code');

function checkPromotion(){
    let value = inputPromotion.value;
    if(promotionCode[value]){//check xem mã giảm giá đúng không
        return promotionCode[value];// trả về phần trăm được giảm
    }
    return 0;// không đúng mã thì trả về không (không giảm giá)
}

//tạo sự kiện click vào nút mã giảm giá
let btnPromotion = document.querySelector('.promotion button');

btnPromotion.addEventListener('click',function(){
    updateTotalMoney(products);
});
renderUI(products);

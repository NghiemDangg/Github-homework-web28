import React, { useState, useEffect } from "react";
import "../styles/cart.css";
const Cart = ({ cart, setCart,handleChange }) => {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const newArray = cart.filter((item) => {
      if(item.id === id){
        item.amount = 1;
      }
      return item.id !== id;
    });
    setCart(newArray);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <article>
      <div className="cart-list">
        {cart.map((item) => (
          <div className="cart_box border-gradient" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p className="cart_name">{item.name}</p>
            </div>
            <div className="cart_btn">
              <button className="btn btn_minus" onClick={()=>handleChange(item,"-")}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <button className="btn-amount">{item.amount}</button>
              <button className="btn btn_plus" onClick={()=>handleChange(item,"+")}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="price_wrapper">
              <span className="cart_price">{item.price} $</span>
              <button
                className="btn btn_remove"
                onClick={() => handleRemove(item.id)}
              >
                <i className="fa-sharp fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}

        <React.Fragment>
          <div className="cart_total">
            {cart.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              <>
                <p>Total price of your Cart:</p>
                <span className="total_price">{price} $</span>
              </>
            )}
          </div>
        </React.Fragment>
      </div>
    </article>
  );
};

export default Cart;

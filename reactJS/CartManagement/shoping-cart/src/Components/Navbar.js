import React from "react";
import "../styles/navbar.css"

export default function Navbar({setShow,size}) {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={()=> setShow(true)}>Fruit Shop</span>
          <div className="cart" onClick={()=>setShow(false)}>
            <span><i className="fa-solid fa-cart-plus"></i></span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

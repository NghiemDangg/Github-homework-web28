import React from "react";
import "../styles/navbar.css"

export default function Navbar({setShow}) {
  return (
    <div>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={()=> setShow(true)}>My Shoping</span>
          <div className="cart" onClick={()=>setShow(false)}>
            <span><i className="fa-solid fa-cart-plus"></i></span>
            <span>0</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

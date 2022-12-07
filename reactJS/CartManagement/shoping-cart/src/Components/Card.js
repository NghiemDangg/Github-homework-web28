import React from "react";

const Cards = ({ item,handleClick }) => {
  const { id, name, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="detail">
        <div className="main-detail">
        <p className="name">{name}</p>
        <p className="price">{price} $</p>
        </div>
        <button onClick={()=>handleClick(item)} className="btn-add">Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

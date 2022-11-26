import React from "react";
function ProductCard(props){

    const {product} = props;
    const {name, image: imgUrl,price,description, supplier} = product;
    return (
        <div className="Container">
          <div className="Image-wrapper">
            <img
              className="Image"
              src= {imgUrl}
            ></img>
          </div>
    
          <div className="content-wrapper">
            <div className="heading">{name}</div>
            <div className="supplier">by {supplier}</div>
    
            <div className="descripstion">
              {description}
            </div>
    
            <div className="content-footer">
              <div className="price">{price}$</div>
              <button className = "btn-buy">buy now</button>
            </div>
          </div>
        </div>
      );
}
export default ProductCard;
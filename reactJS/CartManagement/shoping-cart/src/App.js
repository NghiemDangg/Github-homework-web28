import React, { useState } from "react";
import Cart from "./Components/Cart";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import "./styles/main.css";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 4000);
      handleChange(item,+1);
      return;
    }
    // add new item
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let value = 1;
    if (d === "-") {
      value = -1;
    }

    const arr = cart.map((data) => {
      if(data.amount > 0|| value===1){
        if (data.id === item.id) {
          data.amount = data.amount + value;
        }
      }
      return data;
    });
    setCart(arr);
  };
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Main handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && (
        <div className="noti">Item is already added to your Cart</div>
      )}
    </React.Fragment>
  );
};

export default App;

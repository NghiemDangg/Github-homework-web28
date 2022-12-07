import { useState } from "react";
import "./App.css";
import CartManagement from "./page/CartManagement/CartManagement";
import PostCard from "./page/postcard/Content";
import ScrollButton from "./page/postcard/ScrollButton";
import SearchBar from "./page/postcard/Search";
import Timer from "./page/timer/Timer";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      
      <button onClick={()=>{
        setShow(!show)
      }}>click me</button>
      {show && <CartManagement/>}
    </div>
  );
}

export default App;

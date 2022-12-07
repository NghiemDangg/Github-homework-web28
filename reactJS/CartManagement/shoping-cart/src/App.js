import React, { useState } from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

const App = () => {
  const [show, setShow] = useState(true);
  return <React.Fragment>
    <Navbar setShow= {setShow} />
   {
    show?<Main/>:"Cart"
   }
  </React.Fragment>
};

export default App;

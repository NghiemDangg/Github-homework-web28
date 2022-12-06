import React, { useState, useEffect, Fragment } from "react";

export default function Timer() {
  const [countdown, setCountdown] = useState(0);
  const [value, setValue] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart) {
      const handleSetTimeOut = () => {
        if (countdown > 0) {
          const idTimer = setTimeout(() => {
            setCountdown(countdown - 1);
          }, 1000);

          return () => clearTimeout(idTimer);
        }
      };
      handleSetTimeOut();
      if(countdown === 0) setIsStart(false)
    }
    
  }, [countdown, isStart]);

  const handleChangeNumber = (e) => {
    setCountdown(e.target.value);
    setValue(e.target.value);
  };

const handleClick= () => {
  if(isStart) {
    setCountdown(value);
  }
  setIsStart(!isStart);
}

  return (
    <Fragment>
      <input onChange={handleChangeNumber} />

      <button id="btn" onClick={handleClick}>
        {!isStart ? "start" : "pause"}
      </button>

      <h1>{countdown}</h1>
    </Fragment>
  );
}

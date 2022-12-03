import React, { useState, useEffect } from "react";
export default function ScrollButton() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleClick = () => {
      window.scrollY = 0;
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {showGoToTop && <button className="scroll-btn">Go To Top</button>}
    </div>
  );
}

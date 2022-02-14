import React, { createContext, useState } from "react";

export const MainContext = createContext();
function Context({ children }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };
  const data = {
    position, setPosition,handleMove
  }




  return (
    <MainContext.Provider value={data}>
      {children}
    </MainContext.Provider>
  );
}

export default Context;

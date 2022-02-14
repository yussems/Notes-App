import React, { useContext } from "react";
import { MainContext } from "../Context";

function MouseText() {
     const {position} = useContext(MainContext)
  return (
    <div style={{ position: "absolute", left: position.x, top: position.y }}>
      yorum yazmak için tıkla
    </div>
  );
}

export default MouseText;

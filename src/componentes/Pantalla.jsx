import React from "react";
import "../style/pantalla.css";

function Pantalla({ input }) {
  
  if (input == "") {
    return <div className="input">0</div>;
  } else {
    
    return <div className="input">{input}</div>;
  }
}

export default Pantalla;

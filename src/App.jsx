import Titulo from "./componentes/Titulo";
import "./style/app.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs"

function App() {

  const [input, setInput] = useState("");
  const addInput = (val) => {
    setInput(input + val);
  };
  const result = ()=>{
    if (input){
      setInput(evaluate(input))
    }else{
      alert("Por favor ingresar un numero para realizar el calculo")
    }
    
  }

  return (
    <div className="app">
      <Titulo />

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton handleClic={addInput}>1</Boton>
          <Boton handleClic={addInput}>2</Boton>
          <Boton handleClic={addInput}>3</Boton>
          <Boton handleClic={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClic={addInput}>4</Boton>
          <Boton handleClic={addInput}>5</Boton>
          <Boton handleClic={addInput}>6</Boton>
          <Boton handleClic={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClic={addInput}>7</Boton>
          <Boton handleClic={addInput}>8</Boton>
          <Boton handleClic={addInput}>9</Boton>
          <Boton handleClic={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClic={result}>=</Boton>
          <Boton handleClic={addInput}>0</Boton>
          <Boton handleClic={addInput}>.</Boton>
          <Boton handleClic={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={()=> setInput('')} />
        </div>
      </div>
    </div>
  );
}

export default App;

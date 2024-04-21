import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './componentes/navbar';

function App() {
  const handleButtonClick = (action) => {
    console.log(`Botón presionado: ${action}`);
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Bienvenido a mi tienda en línea</h1>
        <button
          className="primary-button"
          onClick={() => handleButtonClick("añadir al carrito")}
        >
          Añadir al carrito
        </button>
        <button
          className="secondary-button"
          onClick={() => handleButtonClick("ver detalles")}
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
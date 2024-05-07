import {ProductosCard} from './ProductosCard';
import { get } from '../utils/conexionApi';
import "../componentes/ProductosGrid.css";


import { useState, useEffect } from 'react';

export const ProductosGrid = ()=>{
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        get("zapatillas deportivas").then((data) => {
          console.log(data.results);
          setProductos(data.results);
        });
      }, []);
    return (
        <ul className="productosGrid">
      {productos.map((producto) => (
        <ProductosCard key={producto.id} productoMap={producto} />
      ))}
    </ul>
  );
};


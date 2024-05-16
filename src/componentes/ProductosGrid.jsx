import { ProductosCard } from './ProductosCard';
import { get } from '../utils/conexionApi';
import "../componentes/ProductosGrid.css";

import { useState, useEffect } from 'react';
// const busca = { selectedOption };

const options = [
  { value: 'Camperas deportivas', label: 'Camperas deportivas' },
  { value: 'Zapatillas', label: 'Zapatillas' },
  { value: 'Gorra', label: 'Gorra' },
  { value: 'Botines de futbol', label: 'Botines' },
  { value: 'Bolso Adidas', label: 'Bolso Adidas' },
  { value: 'Bolso Puma', label: 'Bolso Puma' },
  { value: 'Mochila', label: 'Mochila' },
];

export const ProductosGrid = () => {

  const [selectedOption, setSelectedOption] = useState('Zapatillas');



  const [productos, setProductos] = useState([]);
  const busca = { selectedOption };
  console.log(busca);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await get(selectedOption);
        setProductos(data.results);
        console.log(selectedOption);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProductos();
  }, [selectedOption]);




return (
  <div className='contenedor'>
    
      <div className="p-3 border rounded selector">
        <h4>Elegir productos</h4>
        {/* <select className="form-select" value={value} onChange={handleSeleccionChange}>
          {options.map(option => (
            <option value={option.value}> {option.label} </option>
          ))}
        </select>
        <p>{value}</p> */}

        <select
          value={selectedOption}
          
          onChange={e => setSelectedOption(e.target.value)}
          className="form-select form-select-sm"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}> {option.label} </option>
          ))}


        </select>


      </div>
    

    <div className="productosGrid row">
      {productos.map((producto) => (
        <ProductosCard key={producto.id} productoMap={producto} />
      ))}
    </div>


    {/* <ul className="productosGrid">
      {productos.map((producto) => (
        <ProductosCard key={producto.id} productoMap={producto} />
      ))}
    </ul> */}
  </div>)
};
import { Link } from "react-router-dom";

import "../componentes/ProductosCard.css";

export const ProductosCard = ({ productoMap }) => {
  const imgURL = `${productoMap.thumbnail}`; //-I.jpg
  console.log('producto meli', productoMap)
  
  return (
    <div className="productoCard col mb-4 d-flex">
      <Link to={`/producto/${productoMap.id}`} className="productoCard">
        <img className="productosImage" src={imgURL} alt={productoMap.title} />
        <small className="text-wrap productosText">{productoMap.title}</small>
      </Link>
    </div>

// <li className="productoCard">
// <Link to={`/producto/${productoMap.id}`}>
//   <img className="productoImage" src={imgURL} alt={productoMap.title} />
//   <small>{productoMap.title}</small>
// </Link>
// </li>

    
  );
};
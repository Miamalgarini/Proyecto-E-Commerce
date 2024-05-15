import { Link } from "react-router-dom";

import "../componentes/ProductosCard.css";

export const ProductosCard = ({ productoMap }) => {
  const imgURL = `${productoMap.thumbnail}`; //-I.jpg
  
  return (
    <div className="productoCard col mb-4">
      <Link to={`/producto/${productoMap.id}`}>
        <img className="productoImage" src={imgURL} alt={productoMap.title} />
        <small>{productoMap.title}</small>
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
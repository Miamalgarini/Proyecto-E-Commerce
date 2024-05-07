import { Link } from "react-router-dom";

import "../componentes/ProductosCard.css";
export const ProductosCard = ({ productoMap }) => {
  const imgURL = `${productoMap.thumbnail}`; //-I.jpg
  
  return (
    <li className="productoCard">
      <Link to={`/producto/${productoMap.id}`}>
        <img className="productoImage" src={imgURL} alt={productoMap.title} />
        <small>{productoMap.title}</small>
      </Link>
    </li>
  );
};
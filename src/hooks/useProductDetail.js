import { useState } from "react";

const useProductDetail = async (productId) => {

  const [products, setProducts] = useState([])
  const [ready, setReady] = useState(null)
  const [error, setError] = useState(null)

  try {
    setReady(null);
    const response = await fetch(
      `https://api.mercadolibre.com/items/${productId}`
    );
    if (!response.ok) {
      console.error("No se pudo obtener la información del producto");
    }
    const productData = await response.json();
    setProducts(productData);
    console.log(productData, "sadfjsdlkf")
  } catch (err) {
    console.error("Error al obtener el producto:", err);
    setError(err)
  } finally {
    setReady(true)
  }

  return { products, ready, error, productData }
};
export default useProductDetail;
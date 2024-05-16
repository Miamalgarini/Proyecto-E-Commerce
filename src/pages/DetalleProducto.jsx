import { useParams } from "react-router-dom";
import styles from "./productDetail.module.css";
import useProductDetail from "../hooks/useProductDetail";
import { useEffect, useState } from "react";
import DetalleImage from "./DetalleImage"

function DetalleProducto() {

    const { id } = useParams();

    const size = ["xs", "sm", "md", "lg", "xl"];

  const installmentPrices = () =>{
    if (products.price <= 30000){
      const pricein6 = products.price / 6;
      return <p>Adquirilo en 6 cuotas sin interés de ${pricein6.toLocaleString()}</p>
    }
    if (products.price > 30000){
      const pricein6 = products.price / 6;
      const pricein9 = products.price / 9;
      return (
        <p>
          Adquirilo en 6 cuotas sin interés de ${pricein6.toLocaleString()} <br />
          O en 9 cuotas sin interés de ${pricein9.toLocaleString()}
        </p>

      )
    }
  }

  const [products, setProducts] = useState([])
  const [ready, setReady] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setReady(null);
        const response = await fetch(
          `https://api.mercadolibre.com/items/${id}`
        );
        if (!response.ok) {
          throw new Error("No se pudo obtener la información del producto");
        }
        const productData = await response.json();
        setProducts(productData);
        console.log(productData, "sadfjsdlkf");
      } catch (err) {
        console.error("Error al obtener el producto:", err);
        setError(err);
      } finally {
        setReady(true);
      }
    };

    fetchProductDetail();
  }, [id]); 

  ready && console.log("ASDFDSAF", products)

  /* const { products, ready, productData } = useProductDetail(id)
  console.log("holaaa", ready && productData.title); */

  return (
    <>
        {
            ready && (
                <div className="d-flex"> 
                    <DetalleImage images={products.thumbnail_id}/>
                    <section className={styles.productDetailContainer}>
                    <article className={styles.productDetails}>
                        <div>
                        <h2>{products.title}</h2>
                        <p>REFERENCIA: {products.id}</p>
                        <h2>${products.price.toLocaleString()}</h2>
                        </div>
                        <div>
                        <p>Conocé las promociones</p>
                        {products.price > 10000 && installmentPrices()}
                        </div>
                    </article>
                    <article>
                        <h3>Selecciona tu talle</h3>
                        <div className={styles.sizeContainer}>
                        {size.map((sizes, index) =>(
                            <small className={styles.boxSizes} key={index}>{sizes}</small>
                        ))}
                        </div>
                    </article>
                    <article>
                        <p>Color:</p>
                        <button className={styles.productVariant}>
                        <img src="https://chelseaio.vtexassets.com/arquivos/ids/439215-800-auto?v=638308286884930000&width=800&height=auto&aspect=true" alt="" />
                        </button>
                    </article>
                    <article>
                        <button className="primary-button">Agregar al carrito</button>
                        <button className="secondary-button">Comprar ahora</button>
                    </article>
                    </section>
                </div>
            )
        }
    </>
  );
}

export default DetalleProducto;
import styles from "./productDetail.module.css";

function ProductDetail({ size, product }) {

  const installmentPrices = () =>{
    if (product.price <= 30000){
      const pricein6 = product.price / 6;
      return <p>Adquirilo en 6 cuotas sin interés de ${pricein6.toLocaleString()}</p>
    }
    if (product.price > 30000){
      const pricein6 = product.price / 6;
      const pricein9 = product.price / 9;
      return (
        <p>
          Adquirilo en 6 cuotas sin interés de ${pricein6.toLocaleString()} <br />
          O en 9 cuotas sin interés de ${pricein9.toLocaleString()}
        </p>

      )
    }
  }

  return (
    <section className={styles.productDetailContainer}>
      <article className={styles.productDetails}>
        <div>
          <h2>{product.name}</h2>
          <p>REFERENCIA: {product.id}</p>
          <h2>${product.price.toLocaleString()}</h2>
        </div>
        <div>
          <p>Conocé las promociones</p>
          {product.price > 10000 && installmentPrices()}
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
  );
}

export default ProductDetail;

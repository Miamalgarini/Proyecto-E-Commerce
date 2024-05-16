import { useState } from "react";
import styles from "./productDetail.module.css";

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images.mainImage);
const urls = `http://http2.mlstatic.com/D_NQ_NP_${images}-F.jpg`
  const handleImage = (url) => {
    setMainImg(url);
  };

  return (
    <section className={styles.imageContainer}>
      {/* {Object.keys(images).length > 1 && (
        <article className={styles.imageSecondaryBox}>
          {Object.entries(images).map(([key, value]) => (
            <button onClick={() => handleImage(value)}>
              <img
                key={key}
                src={value}
                className={styles.imageSecondary}
                alt="product image"
              />
            </button>
          ))}
        </article>
      )} */}
      <article className={styles.imagePrincipal}>
        <img src={urls} alt="product principal image" />
      </article>
    </section>
  );
}

export default ProductImage;

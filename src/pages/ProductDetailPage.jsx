import ProductDetail from "../componentes/Product/ProductDetail/ProductDetail"
import ProductImage from "../componentes/Product/ProductImage/ProductImage"
import styles from "../componentes/Product/ProductDetail/productDetail.module.css"

function ProductDetailPage() {

    const image ={
        mainImage: "https://chelseaio.vtexassets.com/arquivos/ids/439213-800-auto?v=638308286008630000&width=800&height=auto&aspect=true",
        imageUno: "https://chelseaio.vtexassets.com/arquivos/ids/439214-800-auto?v=638308286237000000&width=800&height=auto&aspect=true"
    }

    const size = ["xs", "sm", "md", "lg", "xl"];

    const product = {
        name: "Gorra Element Fluky 3.0 Hombre",
        id: "ELYHA00189J",
        price: 31999
    }

  return (
    <div className={styles.container}>
        <ProductImage images={image} />
        <ProductDetail size={size} product={product} />
    </div>
  )
}

export default ProductDetailPage
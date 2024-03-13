import styles from "./ShopProductList.module.scss"
import { useEffect, useState } from "react"
import { getProducts } from "../../api/shop"
import SectionHeading from "../../ui/heading/SectionHeading"
import Button from "../../ui/Button/Button"
import Product from "./components/Product/Product"

const ShopProductList = () => {
	const [producs, setProducts] = useState([])
  const [visibleProducts, setVisibleProduct] = useState({
    start: 0,
    end: 8,
  })

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const showVisibleProducts = () => {
    setVisibleProduct({
      start: 0,
      end: producs.length - 1,
    })
  }

  return (
    <div className={styles.products}>
      <SectionHeading text={"latest products"} uppercase={true} />
      <div className={styles.products__list}>
        {producs &&
          producs
            .slice(visibleProducts.start, visibleProducts.end)
            .map((produc, index) => (
              <Product
                key={index}
                product={producs[visibleProducts.start + index]}
              />
            ))}
      </div>
      {visibleProducts.end < producs.length - 1 && (
        <div className={styles.products__button_show}>
          <Button
            text={"View All Products"}
            color="red"
            onClick={showVisibleProducts}
          />
        </div>
      )}
    </div>
  )
}

export default ShopProductList

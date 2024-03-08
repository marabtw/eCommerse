import styles from "./ShopPage.module.scss"
import React, { useEffect, useState } from "react"
import { getProducts } from "../../api/shop"
import SectionHeading from "../../components/ui/heading/SectionHeading"
import Button from "../../components/ui/button/Button"
import Product from "../../components/product/Product"

const ShopPage = () => {
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
    <div className={styles.shop}>
      <SectionHeading text={"latest products"} uppercase={true} />
      <div className={styles.shop__products}>
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
        <div className={styles.shop__button_show}>
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

export default ShopPage

import styles from "./ShopPage.module.scss"
import { useEffect, useState } from "react"

import ShopProducts from "../../modules/ShopPruducts/ShopProducts"

const ShopPage = () => {
  return (
    <div className={styles.shop}>
      <ShopProducts />
    </div>
  )
}

export default ShopPage

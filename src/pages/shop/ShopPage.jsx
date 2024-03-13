import styles from "./ShopPage.module.scss"
import { useEffect, useState } from "react"

import ShopProductList from "../../modules/ShopPruductList/ShopProductList"

const ShopPage = () => {
  return (
    <div className={styles.shop}>
      <ShopProductList />
    </div>
  )
}

export default ShopPage

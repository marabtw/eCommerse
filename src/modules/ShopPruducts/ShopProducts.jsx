import styles from "./ShopProducts.module.scss"
import SectionHeading from "../../ui/heading/SectionHeading"
import ProductsList from "./components/ProductsList/ProductsList"
import ProductsFilters from "./components/ProductsFilters/ProductsFilters"
import ProductsHeader from "./components/ProductsHeader/ProductsHeader"

const ShopProducts = () => {
  return (
    <div className={styles.shopProducts}>
      <SectionHeading text={"latest products"} uppercase={true} />
      <ProductsHeader />
      <div className={styles.shopProducts__section}>
        <ProductsFilters />
        <ProductsList />
      </div>
    </div>
  )
}

export default ShopProducts

import styles from "./Product.module.scss"
import Button from '../../../../../../ui/Button/Button'

const Product = ({product}) => {
	return (
		<div className={styles.product}>
			<img src={product.image} className={styles.product__img}/>
			<h2 className={styles.product__title}>{product.title}</h2>
			<div className={styles.product__info}>
				<div className={styles.product__ratingContainer}>
					{product.rating.rate}
				</div>
				<div className={styles.product__price}>
					{product.price} £
				</div>
			</div>
			<Button text='Buy Now' color='green'/>
		</div>
	)
}

export default Product

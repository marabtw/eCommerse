import styles from "./Slide.module.scss"

import Button from "../../../../../ui/Button/Button"
import Description from "../../../../../ui/heading/Description"
import sliderImg from "../../../../../assets/images/slider-img.png"

const Slide = ({ tabIndexStatus }) => {
  return (
    <div className={`${styles.slide}`}>
      <div className={`${styles.slide__column}`}>
        <div className={`${styles.slide__columnItem}`}>
          <h2 className={styles.slide__title}>Welcome To Our Gift Shop</h2>
          <Description
            text={
              "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis."
            }
          />
          <Button
            text="contact us"
            color="red"
            uppercase={true}
            tabIndexStatus={tabIndexStatus}
          />
        </div>
      </div>

      <div className={`${styles.slide__column}`}>
        <img src={sliderImg} alt="slider" />
      </div>
    </div>
  )
}

export default Slide

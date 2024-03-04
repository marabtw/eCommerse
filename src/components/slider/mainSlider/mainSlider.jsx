import React from "react"
import styles from "./MainSlider.module.scss"
import Button from "../../ui/button/Button"
import SlideHeading from "../../ui/heading/SlideHeading"
import Description from "../../ui/heading/Description"
import sliderImg from "../../../assets/images/slider-img.png"

const MainSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__container}>
        <div className={`${styles.slider__slide} ${styles.slide_1}`}>
          <div className={styles.slide__column}>
            <div className={styles.slide__columnItem}>
              <SlideHeading text={"Welcome To Our Gift Shop "}/>
              <Description
                text={
                  "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis. "
                }
              />
              <Description
                text={
                  "Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis. "
                }
              />
              <Button text="contact us" color="red" uppercase={true} />
            </div>
          </div>

          <div className={styles.slide__column}>
            <img src={sliderImg} />
          </div>
        </div>
				<div className={styles.slider__controlTool}>

				</div>
      </div>
    </div>
  )
}

export default MainSlider

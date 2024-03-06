import React, { useState } from "react"
import styles from "./MainSlider.module.scss"
import Slide1 from "../slides/slide1/Slide"
import { DotIcon } from "../../ui/icons/icons"

import { LeftDirectionIcon, RightDirectionIcon } from "../../ui/icons/icons"

const MainSlider = () => {
  const [slideAmound, setSlideAmound] = useState(10)

  const slideNumbers = Array.from(
    { length: slideAmound },
    (_, index) => index + 1
  )

  return (
    <div className={styles.slider}>
      <div className={styles.slider__container}>
        {slideNumbers.map((slideNumber) => (
          <Slide1 key={slideNumber} />
        ))}
        <div className={styles.slider__controllTool}>
          <LeftDirectionIcon className={styles.slider__controllTool_left}/>
          <div className={styles.controllTool__items}>
            {slideNumbers.map((slideNumber, index) => (
              <DotIcon key={index} />
            ))}
          </div>
          <RightDirectionIcon className={styles.slider__controllTool_rigth}/>
        </div>
      </div>
    </div>
  )
}

export default MainSlider

import React, { useState, useEffect } from "react"
import styles from "./MainSlider.module.scss"
import Slide from "../slides/slide1/Slide"
import { DotIcon, SelectedDotIcon } from "../../ui/icons/icons"

import { LeftDirectionIcon, RightDirectionIcon } from "../../ui/icons/icons"

const MainSlider = () => {
  const [slideAmound, setSlideAmound] = useState(10)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    let intervalId

    const play = () => {
      intervalId = setInterval(() => {
        showNextSlide()
      }, 4000)
    }

    const stop = () => {
      clearInterval(intervalId)
    }

    if (autoPlay) {
      play()
    } else {
      stop()
    }

    return () => {
      stop()
    }
  }, [autoPlay,currentSlideIndex])

  const slideNumbers = Array.from(
    { length: slideAmound },
    (_, index) => index + 1
  )

  const showNextSlide = () => {
    if (currentSlideIndex === slideAmound - 1) return setCurrentSlideIndex(0)
    setCurrentSlideIndex(currentSlideIndex + 1)
  }
  const showPrevSlide = () => {
    if (currentSlideIndex === 0) return setCurrentSlideIndex(slideAmound - 1)
    setCurrentSlideIndex(currentSlideIndex - 1)
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__content}>
        <div
          className={styles.slider__container}
          style={{ translate: `${-100 * currentSlideIndex}%` }}
        >
          {slideNumbers.map((slideNumber, index) => (
            <Slide
              key={slideNumber}
              tabIndexStatus={currentSlideIndex !== index && -1}
            />
          ))}
        </div>
      </div>
      <div className={styles.slider__controllTool}>
        <button
          onClick={() => showPrevSlide()}
          className={styles.slider__controllTool_left}
        >
          <LeftDirectionIcon />
        </button>
        <div className={styles.controllTool__items}>
          {slideNumbers.map((slideNumber, index) =>
            currentSlideIndex === index ? (
              <button key={index} onClick={() => setCurrentSlideIndex(index)}>
                <SelectedDotIcon />
              </button>
            ) : (
              <button key={index} onClick={() => setCurrentSlideIndex(index)}>
                <DotIcon />
              </button>
            )
          )}
        </div>
        <button
          onClick={() => showNextSlide()}
          className={styles.slider__controllTool_rigth}
        >
          <RightDirectionIcon />
        </button>
      </div>
    </div>
  )
}

export default MainSlider

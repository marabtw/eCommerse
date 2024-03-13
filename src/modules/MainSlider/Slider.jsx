import React, { useState, useEffect } from "react"
import styles from "./Slider.module.scss"
import Slide1 from "./components/slides/Slide1/Slide"
import Slide2 from "./components/slides/Slide2/Slide"
import {
  DotIcon,
  SelectedDotIcon,
  LeftDirectionIcon,
  RightDirectionIcon,
} from "../../ui/icons/icons"

const Slider = () => {
	const [slides, setSlides] = useState([Slide1, Slide2])
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
    autoPlay ? play() : stop()
    return () => {
      stop()
    }
  }, [autoPlay, currentSlideIndex])

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
            <Slide1
              key={slideNumber}
              tabIndexStatus={currentSlideIndex !== index ? -1 : undefined}
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

export default Slider

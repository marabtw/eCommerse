import { useEffect, useMemo, useState } from "react"
import styles from "./DoubleRangeSlider.module.scss"

const DoubleRangeSlider = ({ rangeValues, defaultValues, getCurrentValues }) => {
  const [min, max] = [rangeValues.min, rangeValues.max]
  const acceleration = (max - min) / 100
  const [value1, setValue1] = useState(defaultValues.value1)
  const [value2, setValue2] = useState(defaultValues.value2)
  const [percent1, setPercent1] = useState(0)
  const [percent2, setPercent2] = useState(100)

  useEffect(() => {
    setPercent1(formula(value1))
  }, [value1])

  useEffect(() => {
    setPercent2(formula(value2))
  }, [value2])

  const formula = (current) => {
    return (current - min) / acceleration
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sliderTrack}></div>
        <input
          type="range"
          min={min}
          max={max}
          id="slider-1"
          value={value1}
          onInput={(e) => {
            setValue1(e.target.value)
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          id="slider-2"
          value={value2}
          onInput={(e) => {
            setValue2(e.target.value)
          }}
        />
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.values}>
          <div style={{ left: `${percent1}%` }}>{value1}</div>
          <div style={{ left: `${percent2}%` }}>{value2}</div>
        </div>
      </div>
    </div>
  )
}

export default DoubleRangeSlider

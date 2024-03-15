import styles from "./Filter.module.scss"
import CheckboxLabel from "../../../../../components/CheckboxLabel/CheckboxLabel"
import DoubleRangeSlider from "../../../../../components/DoubleRangeSlider/DoubleRangeSlider"

const Filter = ({ filter }) => {
  return (
    <div className={styles.filter}>
      <h2>{filter.title}</h2>
      <div className={styles.filters}>
        {Array.isArray(filter.categories) ? (
          filter.categories.map((item, index) => (
            <CheckboxLabel key={index} name={item} />
          ))
        ) : (
          <DoubleRangeSlider rangeValues={{min:0,max:120}} defaultValues={{value1: 40, value2: 90}}/>
        )}
      </div>
    </div>
  )
}

export default Filter

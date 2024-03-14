import styles from "./Filter.module.scss"
import CheckboxLabel from "../../../../../components/CheckboxLabel/CheckboxLabel"

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
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Filter

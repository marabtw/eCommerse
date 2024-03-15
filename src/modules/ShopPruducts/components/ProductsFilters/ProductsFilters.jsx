import { useState } from "react"
import styles from "./ProductsFilters.module.scss"
import { getCategories } from "./api"
import { useEffect } from "react"
import Filter from "./components/Filter"
import Button from "../../../../ui/Button/Button"

const ProductsFilter = () => {
  const [categories, setCategories] = useState([])
  const [cost, setCost] = useState({
    min: 0,
    max: 999,
  })
  const [rating, setRating] = useState({
    min: 0,
    max: 5,
  })
  const [filters, setFilters] = useState([
    {
      title: "Categories",
      categories: [],
    },
    {
      title: "Cost",
      cost: { min: 0, max: 999 },
    },
    {
      title: "Rating",
      rating: { min: 0, max: 5 },
    },
  ])

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters]
      const categoryFilter = newFilters.find(
        (filter) => filter.title === "Categories"
      )
      const costFilter = newFilters.find((filter) => filter.title === "Cost")
      const ratingFilter = newFilters.find(
        (filter) => filter.title === "Rating"
      )

      if (categoryFilter) {
        categoryFilter.categories = categories
      }
      if (costFilter) {
        costFilter.cost = cost
      }
      if (ratingFilter) {
        ratingFilter.rating = rating
      }

      return newFilters
    })
  }, [categories, cost, rating])

  return (
    <div className={styles.productsFilters}>
      <h1>Filters</h1>
      {filters.map((filter) => (
        <Filter key={`filter ${filter.title}`} filter={filter} />
      ))}
      <div className={styles.button}>
        <Button color="red" text="Применить" />
      </div>
    </div>
  )
}

export default ProductsFilter

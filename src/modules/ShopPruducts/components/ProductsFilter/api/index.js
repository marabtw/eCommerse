import myAxios from "../../../../../api/axios"

export const getCategories = async () => {
  const response = myAxios.get("/products/category/jewelery")
  return response
}

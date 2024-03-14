import shopAxios from "../../../../../lib/axios/axiosShop"

export const getCategories = async () => {
  const response = await shopAxios.get("/products/categories")
  return response
}

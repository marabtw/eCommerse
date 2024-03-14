import shopAxios from "../../../../../lib/axios/axiosShop"

export const getProducts = async () => {
	const response = await shopAxios.get("/products")
	return response
}
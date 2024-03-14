import myAxios from "../../../../../api/axios"

export const getProducts = async () => {
	const response = await myAxios.get("/products")
	return response
}
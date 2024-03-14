import axios from "axios"

const shopAxios = axios.create({
	baseURL: "https://fakestoreapi.com"
})

export default shopAxios
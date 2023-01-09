import axios from "axios"

const BASE_URL = "https://bronx-ecommerce-api.onrender.com"
// const BASE_URL = "http://localhost:5000/e-commerce_api"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user
const currentUser = user && JSON.parse(user).currentUser
const TOKEN = currentUser?.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  header: { token: `Bearer ${TOKEN}` },
});
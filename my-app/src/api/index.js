import axios from 'axios'

const baseUrl = process.env.baseURL || "https://poke-csc309-app.herokuapp.com"
const Url = "/api"

const api = axios.create({
	baseURL: baseUrl,
	url: Url
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis
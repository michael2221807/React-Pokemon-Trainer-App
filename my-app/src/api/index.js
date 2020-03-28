import axios from 'axios'


// const api = axios.create({
// 	baseURL: 'http://localhost:3000/api',
// })

// const api = axios.create({
// 	baseURL: '/api',
// })


export const insertUser = payload => axios.post(`/api/user`, payload)
export const getAllUsers = () => axios.get(`/api/users`)
export const updateUserById = (id, payload) => axios.put(`/api/user/${id}`, payload)
export const deleteUserById = id => axios.delete(`/api/user/${id}`)
export const getUserById = id => axios.get(`/api/user/${id}`)

// export const insertUser = payload => {
// 	const url = "/api/user"
// }



const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis
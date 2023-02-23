import axios from 'axios'

export async function loginUser (username, password) {
    const {data} = await axios.post('http://localhost:3031/users/login', {username,password})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function registerUser (username,email, birthday,password) {
    const {data} = await axios.post('http://localhost:3031/users/register', {username, email, birthday, password})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}

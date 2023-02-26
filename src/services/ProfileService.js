import axios from 'axios'

export async function getUser (id) {
    const { data } = await axios.get(`http://localhost:3031/profile/` + id)

    if (data?.message) {
        return data.message
    } else {
        return data
    }
}


export async function getUserByName (username, password) {
    const {data} = await axios.post('http://localhost:3031/users/login', {username,password})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}



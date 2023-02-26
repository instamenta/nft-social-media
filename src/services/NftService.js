import axios from 'axios'

export async function getNftById (username, password) {
    const {data} = await axios.post('http://localhost:3031/users/login', {username,password})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function getNftByName (username,email, birthday,password) {
    const {data} = await axios.post('http://localhost:3031/users/register', {username, email, birthday, password})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function getMostWantedCount (count = 5) {
    count = Number(count)
    const {data} = await axios.get('http://localhost:3031/nft/catalog/most-wanted/' + count)
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function decodeToken (token) {
    const {data} = await axios.post('http://localhost:3031/users/decode', {token})
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}


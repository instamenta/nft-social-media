import axios from 'axios'


export async function getNfts() {
    const data = await axios.get('http://localhost:3031/nft/catalog')
    return data
}
export async function getNftById(id) {
    const { data } = await axios.get(`http://localhost:3031/nft/catalog/${id}`)
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function getNftByName(username, email, birthday, password) {
    const { data } = await axios.post('http://localhost:3031/users/register', { username, email, birthday, password })
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function getMostWanted() {
    const { data } = await axios.get('http://localhost:3031/nft/catalog/most-wanted')
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function getMostWantedCount(count = 5) {
    count = Number(count)
    const { data } = await axios.get('http://localhost:3031/nft/catalog/most-wanted/' + count)
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}

export async function decodeToken(token) {
    const { data } = await axios.post('http://localhost:3031/users/decode', { token })
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function uploadNft(name, info, description, price, pic, auth) {
    const { data, status } = await axios.post('http://localhost:3031/nft/upload',
        { name, info, description, price, pic, auth })
    return { data, status }
}

export async function deleteNft(id) {
    const { data } = await axios.get(`http://localhost:3031/nft/catalog/${id}/delete`)
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function editNft(id, name, info, description, price, pic, auth) {
    const { status } = await axios.post(`http://localhost:3031/nft/catalog/${id}/edit`,
        { name, info, description, price, pic, auth })
    return status
}


export async function likeNft(id, username, creatorName) {
    const { data } = await axios.post(`http://localhost:3031/nft/like/${id}/${username}=${creatorName}`,
        { username, creatorName })
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}
export async function ownNft(id, username, creatorName, picUrl) {
    const { data } = await axios.post(`http://localhost:3031/nft/own/${id}/${username}=${creatorName}`,
        { picUrl })
    if (data?.message) {
        return data.message
    } else {
        return data
    }
}


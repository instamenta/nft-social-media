
const jwt = require('jsonwebtoken')

const decodeToken = async (token) => {
    const decoded = await jwt.verify(token, "SOMERANDOMSECRET")
    
    return decoded
}

module.exports = decodeToken



const jtw = require('jsonwebtoken')

const generateToken = (id) => {
    return jtw.sign({id}, 'SOMERANDOMSECRET', {
        expiresIn:"30d",
    })
}
module.exports = generateToken
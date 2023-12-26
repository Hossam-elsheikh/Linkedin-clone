const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const auth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(500).json({ message: 'the user must log in first take token and paste it in auth' })
    }
    try {
        const decoded = await promisify(jwt.verify)(authorization.replace('Bearer', ''), process.env.SECRET)
        req.id = decoded.id
        next()
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.status(401).json({ message: 'Please log in first' });
    }
}

module.exports = { auth }
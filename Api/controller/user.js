const userModel = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Token = require('../model/Token')
const crypto = require('crypto')

const addUser = async (req, res) => {
    const insertUser = req.body
    console.log(req.body);
    try {
        const newUser = await userModel.create(insertUser)
        const token = await new Token({
            userId: newUser.id,
            token: crypto.randomBytes(32).toString('hex')
        }).save()
        res.status(200).json({ message: 'new user added', user: newUser })
    } catch (err) {
        console.error('Error in signup:', err);
        res.status(500).json({ message: err.message })
    }
}


const getUser = async (req, res) => {
    const userId = req.params.id
    try {
        wantedUser = await userModel.findOne({_id:userId})
        res.status(200).json({ message: "the user u want", user: wantedUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const getUsers = await userModel.find()
        res.status(200).json({ message: 'the all users r here for u sir', users: getUsers })
    } catch (err) {
        res.status(err).json({ message: err.message })
    }
}

const editUser = async (req, res) => {
    const userId = req.params.id
    const { name, email, password, phoneNumber, location, profilePicture, profileCover } = req.body
    try {
        const patchingUser = await userModel.findByIdAndUpdate(
            userId,
            { name, email, password, phoneNumber, location, profilePicture, profileCover },
            { new: true })
        res.status(200).json({ message: "user updated successfully", user: patchingUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.id
    try {
        const deletingUser = await userModel.findByIdAndDelete(userId)
        res.status(200).json({ message: 'user deleted successfully', theDeletedUser: deletingUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "the user must enter his email and password" })
    }
    try {
        const user = await userModel.findOne({ email: email })
        if (!user) {
            res.status(404).json({ message: "invalid email or password" })
        }
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            res.status(401).json({ message: 'invalid password' })
        }
        // console.log('Secret key:', process.env.SECRET);
        const token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET)
        res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 }); 
        res.status(200).json({message: "logged successfully", id: user.id, token: token })
    } catch (err) {
        console.error('Error in login:', err); 
        res.status(500).json({ message: err.message })
    }
}

module.exports = { addUser, getUser, getAllUsers, editUser, deleteUser, login }
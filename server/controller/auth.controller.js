const UserModel = require('../model/users.model');
const bcrypt = require('bcrypt');
require('dotenv').config();

const jwt = require('jsonwebtoken');

const login_handler = async (req, res) => {
    try {
        const { loginID, password } = req.body;
        const user = await UserModel.findOne({ loginID: loginID });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }
        const jwtSecret = process.env.JWT_SECRET || (process.env.NODE_ENV === 'production' ? null : 'dev-secret');
        if (!jwtSecret) {
            console.error('login_handler error: JWT_SECRET is not set in environment');
            return res.status(500).send('Server misconfiguration: missing JWT secret');
        }
        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '24h' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });
        res.status(200).send({
            message: 'Login successful',
            token,
            loginID: user.loginID,
            email: user.email
        });

    } catch (err) {
        console.error('login_handler error:', err);
        res.status(500).send('Internal Server Error');
    }
}

const signup_handler = async (req, res) => {
    try {
        const { loginID, email, password } = req.body;
        const existingUser = await UserModel.findOne({ loginID: loginID });
        if (existingUser) {
            return res.status(409).send('User already exists , try a different loginID');
        }
        const newUser = new UserModel({ loginID, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('signup_handler error:', err);
        res.status(500).send('Internal Server Error');
    }
}

const logout_handler = (req, res) => {
    res.clearCookie('token');
    res.clearCookie('Authorization');
    res.redirect('/login');
};

module.exports = {
    login_handler,
    signup_handler,
    logout_handler
};

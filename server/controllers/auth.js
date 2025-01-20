// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../db.js')
const mysql = require('mysql2/promise');
require('dotenv').config();



const register = async (req, res) => {
    const {username, email, password } = req.body;
    let role = 'user';

    if (email.toLowerCase() === 'kc@gmail.com') {
        role = 'admin';
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const [result] = await db.query(
            'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?)',
            [email, hashedPassword, role]
        );
        res.status(201).json({ id: result.insertId, email, role });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
        return res.status(400).json({ message: 'User not found' });
    }

    const user = rows[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
        { email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
};

module.exports = {
    register,
    login,
};

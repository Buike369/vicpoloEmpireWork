// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../db.js')

require('dotenv').config();

// User Registration (Assign Admin Role to Kingsley's Email)
const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
            if (result.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Assign "admin" role if the email is Kingsley's
            const role = email.toLowerCase() === 'support@vicpoloempire.com' ? 'admin' : 'user';

            // Insert new user
            db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
                [name, email, hashedPassword, role],
                (err, result) => {
                    if (err) return res.status(500).json({ error: err.message });

                    res.status(201).json({ message: `User registered successfully as ${role}` });
                }
            );
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// const register = async (req, res) => {
//     const {username, email, password } = req.body;
//     let role = 'user';

//     if (email.toLowerCase() === 'kc@gmail.com') {
//         role = 'admin';
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     try {
//         const [result] = await db.query(
//             'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?)',
//             [email, hashedPassword, role]
//         );
//         res.status(201).json({ id: result.insertId, email, role });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

//     if (rows.length === 0) {
//         return res.status(400).json({ message: 'User not found' });
//     }

//     const user = rows[0];
//     const validPassword = await bcrypt.compare(password, user.password);

//     if (!validPassword) {
//         return res.status(400).json({ message: 'Invalid password' });
//     }

//     const token = jwt.sign(
//         { email: user.email, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//     );

//     res.json({ token });
// };

// User Login
const login = (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (result.length === 0) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        const user = result[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid  password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token, user });
    });
};


// Reset Password
const passwordReset = async (req, res) => {
    const { email, newPassword } = req.body;

    // Check if user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password in database
        db.query('UPDATE users SET password = ? WHERE email = ?',
            [hashedPassword, email],
            (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                res.json({ message: 'Password reset successfully' });
            }
        );
    });
};




module.exports = {
    register,
    login,
    passwordReset
};

// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { db } = require('../db.js')
const { authenticateToken, adminOnly } = require('../middleware/authMiddleware');

router.get('/users', authenticateToken, adminOnly, async (req, res) => {

    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

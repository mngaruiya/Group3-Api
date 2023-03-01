const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ status: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
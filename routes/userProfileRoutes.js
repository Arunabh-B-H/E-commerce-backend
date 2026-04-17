const express = require('express');
const { getMe, updateDetails, deleteUser } = require('../controllers/userProfile');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect); // All profile routes are protected

router.get('/profile', getMe);
router.put('/profile', updateDetails);
router.delete('/profile', deleteUser);

module.exports = router;

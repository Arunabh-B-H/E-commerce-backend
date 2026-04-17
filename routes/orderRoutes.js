const express = require('express');
const {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderStatus,
} = require('../controllers/orderController');

const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect); // All order routes require login

router.post('/', addOrderItems);
router.get('/myorders', getMyOrders);
router.get('/:id', getOrderById);

// Admin only update status
router.put('/:id/status', authorize('admin'), updateOrderStatus);

module.exports = router;

const Product = require('../models/product');
const Order = require('../models/order');

// @desc    Get recommended products for a user (Mock RapidMiner logic)
// @route   GET /api/analytics/recommendations/:userId
// @access  Private
exports.getRecommendations = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        // Mock Logic: 
        // In a real RapidMiner integration, we would:
        // 1. Send user history (orders, views) to RapidMiner REST API
        // 2. Receive predicted product IDs
        // 3. Fetch product details from MongoDB
        
        // Simulating the logic:
        // Find user's last orders to get categories they like
        const userOrders = await Order.find({ user: userId }).populate('products.product');
        
        let recommendedCategories = [];
        userOrders.forEach(order => {
            order.products.forEach(item => {
                if (item.product && item.product.category) {
                    recommendedCategories.push(item.product.category);
                }
            });
        });

        // Remove duplicates
        recommendedCategories = [...new Set(recommendedCategories)];

        let recommendations;
        if (recommendedCategories.length > 0) {
            // Recommend products in those categories that the user hasn't bought or just general popular ones in those categories
            recommendations = await Product.find({ 
                category: { $in: recommendedCategories } 
            }).limit(5);
        } else {
            // If no history, recommend top rated products
            recommendations = await Product.find().sort('-ratings').limit(5);
        }

        res.status(200).json({
            success: true,
            provider: 'RapidMiner (Simulated)',
            data: recommendations,
        });
    } catch (err) {
        next(err);
    }
};

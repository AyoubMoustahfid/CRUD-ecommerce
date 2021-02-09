const express = require('express');

const router = express.Router();

const {createProduct, allProducts, relatedProduct, productById, updateProduct, deleteProduct} = require('./../controllers/productController');

router.get('/', allProducts)
router.post('/create', createProduct)
router.get('/related/:productId', relatedProduct)
router.put('/:productId',updateProduct )
router.delete('/:productId',deleteProduct )

router.param("productId", productById)

module.exports = router

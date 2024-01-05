// product-service.js
const express = require('express');
const app = express();

// Endpoint to get product information
app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  // Fetch product details from the database or any storage
  const product = {
    id: productId,
    name: 'Example Product',
    price: 99.99,
    // other product details
  };
  res.json(product);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});


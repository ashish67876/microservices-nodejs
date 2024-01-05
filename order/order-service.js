// order-service.js
const express = require('express');
const app = express();

// Endpoint to create an order
app.post('/orders', (req, res) => {
  // Your order creation logic here
  // Example: receive order details and save to a database
  const order = {
    orderId: '12345',
    productId: req.body.productId,
    quantity: req.body.quantity,
    // other order details
  };
  res.json(order);
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Order service running on port ${PORT}`);
});


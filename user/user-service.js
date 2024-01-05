// user-service.js
const express = require('express');
const app = express();

// Endpoint to get user information
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // Fetch user details from the database or any storage
  const user = {
    id: userId,
    username: 'exampleUser',
    email: 'user@example.com',
    // other user details
  };
  res.json(user);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});


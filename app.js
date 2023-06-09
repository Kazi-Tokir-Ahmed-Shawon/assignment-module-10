const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const authenticate = require('./authenticate');

const app = express();
const port = 3000;

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/product-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Database connection error:', error);
});

// Middleware
app.use(express.json());

// Routes
app.use('/products', authenticate, productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require('express');
const mongoose = require("mongoose");
const logger = require('./logger')

// config app
const app = express();
require("dotenv").config()
app.use(express.json())

// Import Routes
const productRoutes = require('./routes/productRouter')
const categoryRoutes = require('./routes/categoryRouter')
const souCategoryRoutes = require('./routes/souCategoryRouter')



// data base connect
mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => logger.info('db is connected'))
  .catch(err => logger.info('not connect to the database'))


// Routes Middleware
app.use('/api/category', categoryRoutes)
app.use('/api/souCategory', souCategoryRoutes)
app.use('/api/product', productRoutes)

 app.listen(3000, () => {
    logger.error('Server is connect in port : 3000');
})
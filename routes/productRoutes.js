
const express = require('express');
const Product = require('../models/productModels')


const {createProduct,getAllProduct , getSingleProduct,updateProduct,deleteProduct} = require('../controllers/productControllers')

const router = express.Router();

//adding data into the databases
router.post('/', createProduct);

//fetch or get data from database
//get all the products from the database
router.get('/', getAllProduct)

//get only one product from the database

router.get('/:id', getSingleProduct)

//Update the product from the id

router.put('/:id',updateProduct)


//remove or delete the data from the database

router.delete('/:id', deleteProduct)


module.exports = router;



// const express = require('express');
// const Product = require('../models/productModels')
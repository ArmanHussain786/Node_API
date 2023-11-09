const Product = require('../models/productModels')

//All the logics should be inside the controller layer

//create products
const createProduct =  async(req,res)=>{
    try {
        const products = await Product.create(req.body)
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

//get all products

const getAllProduct = async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

//get single product

const getSingleProduct = async(req,res)=>{
    try {
        const{id}= req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

//update a product
const updateProduct = async(req, res) =>{
    try {
      const{id}= req.params;
      const products = await Product.findByIdAndUpdate(id,req.body);
      if(!products)
      {
          //we cannot find the product with the given id
          return res.status(404).json({message: `cannot find any product with the id ${id}`})
      }
      const updatedProd = await Product.findById(id);
      res.status(200).json(updatedProd);
      
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  //delete a product

  const deleteProduct = async(req,res)=>{
    try {
        const{id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product)
        {
            return res.status(404).json({message: `cannot find any product with the id ${id}`});
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct

}
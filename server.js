const express= require('express')
const mongoose = require('mongoose')
const model = require('./models/productModels')
const Product = require('./models/productModels')
const app = express()





//routes 1
app.get('/', (req, res)=>{
    res.send('HELLO NODE API')
})

//routes 2
app.get('/blog', (req, res)=>{
    res.send('HELLO NODE API, this is my blog and this is second thing after the change have you got the same and this is the third thing')
})
//middleware so that app can understand the json format
app.use(express.json())


//adding data into the databases
app.post('/products',  async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//fetch or get data from database
//get all the products from the database
app.get('/products', async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//get only one product from the database

app.get('/products/:id', async(req,res)=>{
    try {
        const{id}= req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update the product from the id

app.put('/products/:id',async(req, res) =>{
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
})


//remove or delete the data from the database

app.delete('/products/:id', async(req,res)=>{
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
})




mongoose.
connect('mongodb+srv://Arman:Arman9999@cluster0.supjowm.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(3000, ()=>{
        console.log('This is my node js running on 3000 ')
    });
   
}).catch((error) =>{
    console.log(error)
})
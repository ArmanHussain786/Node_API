require('dotenv').config()
const express= require('express')
const mongoose = require('mongoose')

const productRoute = require('./routes/productRoutes')

const app = express()


const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL


//middleware so that app can understand the json format
app.use(express.json())


//routes 1
app.use('/api/products',productRoute);


app.get('/', (req, res)=>{
    res.send('HELLO NODE API')
})

//routes 2
app.get('/blog', (req, res)=>{
    res.send('HELLO NODE API, this is my blog and this is second thing after the change have you got the same and this is the third thing')
})






//connection to the port
mongoose.
connect(MONGO_URL)
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(PORT, ()=>{
        console.log(`This is my node js running on ${PORT}`)
    });
   
}).catch((error) =>{
    console.log(error)
})
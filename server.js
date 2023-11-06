const express= require('express')
const app = express()

//routes
app.get('/', (req, res)=>{
    res.send('HELLO NODE API')
})

app.listen(3000, ()=>{
    console.log('This is my node js running on 3000')
})
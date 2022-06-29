const { json } = require('express')
const express = require('express')
const app = express ()

const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
 
    res.send("Welcome to this API, Random Generator")
})

app.get('/api/numbers', (req,res)=>{
 
    let x = Math.floor((Math.random() * 100000) + 100000);
    const numbers = {
        numbers: x
    }
    
    JSON.stringify(numbers);

    res.send(numbers);
  
})

app.listen(port, () =>{
    console.log('App is listening to port' + port)

})
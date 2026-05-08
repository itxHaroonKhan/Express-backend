
const express = require('express');

const app = express()

const products =[
    { id: 1, name: "MacBook", category: "laptops" },
    { id: 2, name: "iPhone", category: "mobiles" },
    { id: 3, name: "Dell", category: "laptops" }

]


app.get('/search',(req,res)=>{
 
    const categoryQuery = req.query.category;

    const result = products.filter(p => p.category === categoryQuery);

    if(result.length > 0){
        res.json(result)
    }

})

app.listen(3000, () => console.log("Server ON!"));


// http://localhost:3000/search?category=mobiles
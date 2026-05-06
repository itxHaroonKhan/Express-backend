//without express
// const http = require('node:http');

// const hostname = '127.0.0.1'; //localhost
// const port = 4000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Welcome to my backend world , aj se backend start!\n');
// });


// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//with express






// // 1. Express ko import kiya
// const express = require('express');

// // 2. Server initialize kiya
// const app = express();

// // 3. Port define kiya
// const PORT = 3000;

// // 4. Pehla Route (Home Page)
// app.get('/', (req, res) => {
//     res.send("<h1>Hello! Backend ki duniya mein khushamdeed.</h1>");
// });

// // 5. Dusra Route (About Page)
// app.get('/about', (req, res) => {
//     res.send("Main ek Express server hoon.");
// });

// // 6. Server ko start kar diya
// app.listen(PORT, () => {
//     console.log(`Server chalu ho gaya hai: http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();

let port = process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('Welcome to my backend world , aj se backend start!');
});

const products = [
    {id: 1 , name: "Product 1", price: 100},
    {id: 2 , name: "Product 2", price: 200},
    {id: 3 , name: "Product 3", price: 300},
]

app.get('/products', (req , res) =>{
    res.json({limit: 30 , page: 1 ,products: products});
})

app.listen(port, () =>{
    console.log("Server is runnning on port " + port);
})
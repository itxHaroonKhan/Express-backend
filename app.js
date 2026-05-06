// 1. Express ko import kiya
const express = require('express');

// 2. Server initialize kiya
const app = express();

// 3. Port define kiya
const PORT = 3000;

// 4. Pehla Route (Home Page)
app.get('/', (req, res) => {
    res.send("<h1>Hello! Backend ki duniya mein khushamdeed.</h1>");
});

// 5. Dusra Route (About Page)
app.get('/about', (req, res) => {
    res.send("Main ek Express server hoon.");
});

// 6. Server ko start kar diya
app.listen(PORT, () => {
    console.log(`Server chalu ho gaya hai: http://localhost:${PORT}`);
});
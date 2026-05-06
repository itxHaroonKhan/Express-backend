

# 🚀 Backend Development: Day 1 (Express.js Setup)

Yeh guide aapko step-by-step apna pehla Express server banane mein madad karegi.

---

## 📋 Step-by-Step Installation Guide

### **Step 1: Project Initialization**
Sabse pehle ek naya folder banayein, use VS Code mein open karein aur terminal mein ye command likhein:
```bash
npm init -y
```
> **Samjhane ke liye:** `npm init` ka matlab hai "Node Project Initialize". `-y` ka matlab hai "Yes" (saare default sawal skip kar do). Isse aapki **package.json** file ban jayegi jo aapke poore project ka **"ID Card"** hai.

### **Step 2: Express Install Karein**
Ab server banane ke liye Express ki library zaroorat hai:
```bash
npm install express
```
> **Samjhane ke liye:** Isse ek `node_modules` ka folder banega. Students ko bataein ke ye wo **"Store"** hai jahan Express ki saari files aur functions maujood hain.

### **Step 3: Nodemon Install Karein (Development Tool)**
Baar-baar server restart karne se bachne ke liye:
```bash
npm install nodemon
```
> **Tip:** Isse code save karte hi server khud restart ho jayega.

---

### **Step 4: Main File Setup (`app.js`)**
Folder mein ek nayi file banayein jiska naam `app.js` rakhein aur ye basic code likhein:

```javascript
const express = require('express'); // Express ko bulaya
const app = express(); // Express ka function initialize kiya

// Home Route
app.get('/', (req, res) => {
    res.send("<h1>Server chal raha hai! Backend ki pehli class mubarak ho.</h1>");
});

// Server Listening
app.listen(3000, () => {
    console.log("Server is active on: http://localhost:3000");
});
```

---

### **Step 5: Scripts Setup (Shortcuts)**
`package.json` file open karein aur `scripts` wale section ko aise update karein:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

---

### **Step 6: Server Start Karein**
Terminal mein ye command likh kar apna server on karein:
```bash
npm run dev
```

---

## 📊 Summary Table (Whiteboard Reference)

| Step | Command | Kya Hota Hai? |
| :--- | :--- | :--- |
| **1** | `npm init -y` | `package.json` banti hai (Project ID) |
| **2** | `npm i express` | Express library install hoti hai |
| **3** | `npm i nodemon` | Auto-restart tool milta hai |
| **4** | **Code Likho** | `app.js` mein logic likhte hain |
| **5** | `npm run dev` | Server start ho jata hai 🔥 |

---

## 💡 Pro Class Tip:
Students ko batayein ke **`package.json`** ko kabhi delete nahi karna. Agar aapka `node_modules` ka folder delete ho bhi jaye (jo ke size mein bada hota hai), toh sirf `npm install` likhne se saari libraries wapas aa jayengi kyunki unka record `package.json` mein hota hai.

---

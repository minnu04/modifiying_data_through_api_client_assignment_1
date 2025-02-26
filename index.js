const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');


const MenuItem = require('./MenuItem');
const app = express();
const port = 3010;

app.use(express.json())
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/menu',async(req,res)=>{
  try {
    const menuItem=new MenuItem(req.body);
    await menuItem.save
    res.status(201).send({message: 'Menu item created',menuItem});
  } catch (error) {
    res.status(400).send({ error: error.message})
  }
});
app.get('/menu',async(req,res)=>{
  try {
    const menuItem=await MenuItem.find();
    res.status(200).send(menuItem);
  } catch (error) {
    res.status(500).send({error: error.message})
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

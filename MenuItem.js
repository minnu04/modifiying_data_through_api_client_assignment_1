const mongoose=require('mongoose')
const menuItemSchema=new mongoose.Schema({
 name:{
    type: String,
    required: true,
 },
 discription:{
     type: String,
 },
 price: {
    type: Number,
    required: true,
 }
})
const MenuItem = mongoose.model('MenuItem',menuItemSchema);

module.exports = MenuItem;
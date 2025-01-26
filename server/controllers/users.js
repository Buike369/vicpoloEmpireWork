
const { db } = require('../db.js')
require('dotenv').config(); 


const getAllUser = async(req,res)=>{
const gg = 'SELECT * FROM users'

try{
    const [row] = await db.query(gg);

    res.status(201).json({  result:row });
}catch (err){
    res.status(500).json({ error: err.message });

}
   

}

module.exports = {
    getAllUser
  
};
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/usersRoute');
const contactUsRoutes = require('./routes/formContact.js');

const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/form', contactUsRoutes);


app.listen(port, ()=>{
    console.log(`server running  on port ${port}`)
})
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/usersRoute');
const contactUsRoutes = require('./routes/formContact.js');
const EmailList = require("./routes/users.js")

const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
// app.use(cors());
app.use(bodyParser.json());


var allowedOrigins = [
  "http://localhost:3000",
  "https://www.vicpoloempire.com",
  "https://vicpoloempire.com",
  "http://vicpoloempire.com"
  
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin." +
                    origin;
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);

app.use("/api/auth", authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/form', contactUsRoutes);
app.use('/api/email-list', EmailList);


app.listen(port, ()=>{
    console.log(`server running  on port ${port}`)
})
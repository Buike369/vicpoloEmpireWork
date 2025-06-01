
const { db } = require('../db.js')



// const getAllUser = async(req,res)=>{
// const gg = 'SELECT * FROM users'

// try{
//     const [row] = await db.query(gg);

//     res.status(201).json({  result:row });
// }catch (err){
//     res.status(500).json({ error: err.message });

// }


// }
// 

const getAllUser = (req, res) => {
    db.query('SELECT id, name, email, role FROM users', (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(result);
    });
};

// endpoint for email subscription
const emailSubscription = async (req, res) => {
    const { email } = req.body;

    try {
        db.query('INSERT INTO email_subscription ( email) VALUE (?)',
            email,
            (err, result) => {
                if (err) return res.status(500).json({ error: err.message });

                res.status(201).json({ message: `Use registered successfully as ${role}` });
            }
        );

    } catch (err) {

    }

}

module.exports = {
    getAllUser,
    emailSubscription

};
const express = require('express');
const app = express();
require('./db/index');
const User = require('./db/models/user');

app.use(express.static('views'));

const port = process.env.PORT || 5050;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/register', (req, res) => {
    const { firstName, lastName, phone, securityQuestion, answer, password, email, gender } = req.body;
    const user = new User({firstName, lastName, phone, answer, password, email, gender});
    user.save((err) => {
        if(err) {
            res.send(err);
        } else {
            res.send('<center><h1>User Registered</h1></center>')
        }
    });
})


app.listen(port, () => {
    console.log(`Registration App started on ${port}`);
})
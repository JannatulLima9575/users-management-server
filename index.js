const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('users server is running');
})

const users = [
    { id: 1, name: 'Jannatul Lima', email: 'jannatullima@gmail.com'},
    { id: 2, name: 'Sahmiha Rahman Ruba', email: 'rahmanruba@gmail.com'},
    { id: 3, name: 'Tamanna Akter', email: 'aktertamanna@gmail.com'},
]

// for get data
app.get('/users', (req, res) => {
    res.send(users);
})

// for post data
app.post('/users', (req, res) => {
    console.log('user post method');
    console.log(req.body);
    newUser.id = users.length + 1;

    // add data to the database
    users.push(newUser);
    
    res.send(newUser);
    
})

app.listen(port, () => {
    console.log(`Example app listing port ${port}`);
})
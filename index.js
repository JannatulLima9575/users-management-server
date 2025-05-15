const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

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

app.listen(port, () => {
    console.log(`Example app listing port ${port}`);
})
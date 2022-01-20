const express = require('express');
const mongoose =  require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://ygohamon:asdqwezxc7@cluster0.ug8hk.mongodb.net/Cavaquinho?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

app.get('/', (req, res) => {
    return res.send(`Ola ${req.query.name}`);
});

app.listen(3333);
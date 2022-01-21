const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ygohamon:asdqwezxc7@cluster0.ug8hk.mongodb.net/Cavaquinho?retryWrites=true&w=majority', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => {
    if(err) throw err;
    console.log('Mongo esta conectado!!!')
    
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
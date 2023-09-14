const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shashank:shashank@cluster0.rwjak24.mongodb.net/api?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', () => {
    console.log('Connected to the database');
});

module.exports = db;

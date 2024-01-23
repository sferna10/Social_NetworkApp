const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/fullnameVirtual');



module.exports = connection;

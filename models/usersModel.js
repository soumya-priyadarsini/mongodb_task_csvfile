const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    age: Number
})
const users = mongoose.model('practice_table',userSchema);
module.exports = users
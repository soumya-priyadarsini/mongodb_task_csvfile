const mongoose = require('mongoose');

const DBURL = 'mongodb+srv://123456:Y0hZigycdXH5G0TP@cluster0.3uxokoe.mongodb.net/users?retryWrites=true&w=majority'

exports.connection = mongoose.connect(DBURL,{
}).then(()=>{
    console.log('db connection successsfully')
}).catch((err)=>{
    console.log('db connection error')
});
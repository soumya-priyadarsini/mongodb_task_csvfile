var fs = require('fs'); 
var {parse} = require('csv-parse');
const {userService} = require('../services/userService')

exports.userController = async(req,res) =>{

    console.log(`request received from front-end:-`,JSON.stringify(req.body));
    try {
        const result = await userService(req.body);
        console.log(`response to front-end:-`,JSON.stringify(result));
        res.status(200).json({
            status:0,
            message: result
        })

    } catch (error) {
        console.log(`error to front-end:-`,JSON.stringify(error));
        res.status(400).json({
            status:1,
            message: error
        })
    }
}
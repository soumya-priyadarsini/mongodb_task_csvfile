var fs = require('fs');
// var csv = require('csv-stringify');
const usersmodels = require('../models/usersModel')

exports.userService = async (data) => {
    const { users } = data
    let success = [];
    let failed = [];
    try {
        console.log(users.length)
        for (let i = 0; i < users.length; i++) {

            let name_Rex = new RegExp("^[A-Za-z]{2,51}$");
            let age_Rex = new RegExp("^([1][8-9]|[2-5][0-9]|[6][0-5])$")

            if (((name_Rex.test(users[i].name))) && ((age_Rex.test(users[i].age)))) {
                success.push(users[i])
                fs.appendFileSync("success.csv", `${(users[i].name)},${(users[i].age)}\n`,  function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
            } else {
                failed.push(users[i])
                fs.appendFileSync("failed.csv", `${(users[i].name)}, ${(users[i].age)}\n`,  function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });

            }
        }

        //success csv file
        // csv.stringify(success, (err, output) => {
        //     fs.writeFileSync("success.csv", output);
        // });

        // //failed csv file
        // csv.stringify(failed, (err, output) => {
        //     fs.writeFileSync("failed.csv", output);
        // });

        for (let j = 0; j < success.length; j++) {
            await usersmodels.create({ name: success[j].name, age: success[j].age });
        }
        console.log("receive result from db",)

        return { success, failed }

    }
    catch (error) {
        console.log(error);
        throw error
    }

}
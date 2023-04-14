const fs = require('fs')

let arr = [1, 2, 3, 4, 5]

let i = 0;
let l = arr.length;

const start = (data) => {
    console.log(data);
    fs.appendFileSync('demo.txt', `${data}\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

const recursion = () => {
    if(i == l){
        console.log("Completed!");
        return "Completed!"
    }else{
        start(arr[i]);
        i+=1;
        recursion()
    }
}

recursion()

// The Node JS file system module allows you to read, Write, create, update,delete, or rename the files on your computer.
// In fs module, every method has synchronous and asynchronous.
// Asynchronous is better than synchronous because its never block the program during execution like sunchronous.
// In Asynchronous methods take a last parameter as completion function callback.
// Inside the callback function we pass the first parameter as err for printing the error message when the file have an error.
// import file system module using require keyword: let fs = require('fs');

//read file
let fs = require('fs')
fs.readFile('cal.js','utf8', function(err, data){
    if(err){
        console.log("Error");
    }
    console.log(data);
})
//write file
fs.writeFile('cal1.js','consol.log("done")', function(err){ //creatting cal1.js file and printing done;
    if (err) throw err;
    console.log("Data saved");
})
//append method
fs.appendFile('cal1.js','consol.log("done")', function(err){ //'cal1.js'--> in cal1.js we are printing  'done';
    console.log("Data saved")
})
//delete method
// fs.unlink('del.js',function(err){
//     if (err) throw err;
//     console.log("File is deleted");
// })
//opening file
fs.open('del.js', 'w', function (err, file) {
    if (err) throw err;
    console.log('file opened');
  });
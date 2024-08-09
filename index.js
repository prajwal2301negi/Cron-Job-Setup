const express = require('express');
const app = express();
const cron = require('node-cron');
const fs = require('fs');

// will require two methods->timing,function
// timing = 2second
// cron.schedule('*/2 * * * * *',function(){
//     console.log('running a task every two second');
// })



// File name-> logs.txt will be created and data will be appended after every 10th second 
cron.schedule('*/10 * * * * *',function(){
    let data = `Hii cron job running\n`
    fs.appendFile('logs.txt', data, function(err){
        if(err){
            throw err;
        }
        console.log('File data added');
    } )
})


app.listen(3000,function(){
    console.log('server is running on port 3000');
})
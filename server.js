var express = require('express');

//Create Our application
var app = express();

app.use(express.static('public'));

app.listen(3000,function(){
   console.log('Express Server Is Up On Port 3000...');
});

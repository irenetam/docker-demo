//Load express module with `require` directive

var express = require('express')

var app = express()
app.listen(8081, () => console.log("server is running"))

//Define request response in root URL (/)  
app.get('/', function (req, res) {  
 res.send('Hello World!')  
})
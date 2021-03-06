var express = require('express');
var path = require('path');
var app = express();

app.get("/", function(req,res) {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.use(express.static('src'));
app.use(express.static('node_modules/angular-material'));
app.use(express.static('node_modules/angular-material-data-table/dist'));


app.listen(3000, function () {
  console.log("listening on port 3000")
});

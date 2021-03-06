var express = require('express');
var multer = require('multer');
var upload = multer();
var app = express();
var size = {
  "fileSize": null
}
app.post('/', upload.any(), function(req, res, next){
  size.fileSize = req.files[0].size;
  res.json(size);
});
app.use('/', express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8080, function(){console.log("Server is running...")});
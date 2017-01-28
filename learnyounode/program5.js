var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var type = process.argv[3];
fs.readdir(dir, function(err, data){
  if(err){
    console.log(err);
    return;
  }

  for(var i = 0; i < data.length; i++){
    if(path.extname(data[i]) == '.' + type){
      console.log(data[i]);
    }
  }
});

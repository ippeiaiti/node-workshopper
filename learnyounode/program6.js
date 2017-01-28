var myModule = require('./mymodule.js');
var dirName = process.argv[2];
var fileType = process.argv[3];
myModule(dirName, fileType, function(err, data){
  if(err){
    console.log(err);
    return;
  }

  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
  }
});

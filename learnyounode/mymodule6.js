var fs = require('fs');
var path = require('path');
module.exports = function(dirName, fileType, callback)
{
  fileType = '.' + fileType;
  fs.readdir(dirName, function(err, data){
    if(err) return callback(err);

    var fileList = new Array();
    for(var i = 0; i < data.length; i++)
      if(path.extname(data[i]) === fileType)
        fileList[fileList.length] = data[i];

    callback(null, fileList);
  });
}

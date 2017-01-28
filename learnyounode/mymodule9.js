var http = require('http');
var bl = require('bl');
module.exports = function(in_url, callback)
{
  http.get(in_url, function(response){
    response.pipe(bl(function(err, data){
      if(err)
        return console.error(err);

      callback({
        'url': in_url ,
        'response': data.toString() ,
      });
    }));
  });
}

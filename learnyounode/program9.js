// Sample Answer
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}

/*
// my Answer
var myModule = require('./mymodule.js');
var url = new Array();
for(var i = 2, j = 0; i < process.argv.length; i++){
  url[j++] = {
    'url': process.argv[i] ,
    'response': undefined
  };
}

for(var i = 2; i < process.argv.length; i++){
  myModule(process.argv[i], function(response){
    for(var j = 0; j < url.length; j++){
      if(url[j]['url'] !== response['url']) continue;
      if(url[j]['response'] !== undefined) continue;
      url[j]['response'] = response['response'];
    }

    var j = 0;
    for(; j < url.length; j++) if(url[j]['response'] === undefined) break;

    if(j === url.length){
      for(var j = 0; j < url.length; j++){
        console.log(url[j]['response']);
      }
    }
  });
}
*/

var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
  var reqInfo = url.parse(req.url, true);
  var isoDate = new Date(reqInfo.query.iso);

  var json = undefined;
  switch (reqInfo.pathname) {
    case '/api/parsetime':
      json = {
        "hour": isoDate.getHours() ,
        "minute": isoDate.getMinutes(),
        "second": isoDate.getSeconds()
      };
      break;
    case '/api/unixtime':
      json = { "unixtime": isoDate.getTime() };
      break;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(json));
});
server.listen(process.argv[2]);

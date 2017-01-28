var net = require('net');
var server = net.createServer(function(socket){
  var lpad = function(value, length){
    var pad = '';
    for(var i = 0; i < length; i++) pad += '0';
    return (pad + value).slice(-length);
  };

  var date = new Date();
  var strDate = date.getFullYear()
  + '-'
  + lpad(date.getMonth() + 1, 2)
  + '-'
  + lpad(date.getDate(), 2)
  + ' '
  + lpad(date.getHours(), 2)
  + ':'
  + lpad(date.getMinutes(), 2)
  + '\r\n'
  ;

  socket.end(strDate);
});
server.listen(process.argv[2]);

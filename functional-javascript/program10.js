// sample Answer
module.exports = function(namespace) {
  return console.log.bind(console, namespace);
}

// my Answer
// module.exports = function(namespace) {
//   return (function(){
//     console.log(Array.prototype.slice.call(arguments).join(' '));
//   }).bind(null, namespace);
// }

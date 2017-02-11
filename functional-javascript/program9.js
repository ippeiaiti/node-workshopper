// my Answer
// no prototype.slice
// no prototype.apply
module.exports = function(namespace) {
  return {
    apply: function(){
      console.log([namespace].concat(arguments[1]).join(' '));
    }
  }
}

// sample Answer
// var slice = Array.prototype.slice
//
// module.exports = function(namespace){
//   return function(){
//     console.log.apply(console, [namespace].concat(slice.call(arguments)));
//   };
// };

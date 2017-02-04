// my Answer
module.exports = function()
{
  return Object.keys(arguments).filter((keys) => {
    return Object.prototype.hasOwnProperty.call(arguments[keys], 'quack');
  }).length;
};

// Sample Answer
// module.exports = function()
// {
//   return Array.prototype.slice.call(arguments).filter((obj) => {
//     return Object.prototype.hasOwnProperty.call(obj, 'quack');
//   }).length;
// }

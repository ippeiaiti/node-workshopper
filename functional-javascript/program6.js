module.exports = function(inputWords)
{
  return inputWords.reduce(function(obj, idx){
    obj[idx] = ++obj[idx] || 1;
    return obj;
  }, {});
};

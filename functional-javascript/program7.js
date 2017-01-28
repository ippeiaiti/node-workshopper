module.exports = function(arr, fn, initial)
{
  return (function _reduce(idx, val){
    if(arr[idx] === undefined) return val;
    return _reduce(idx + 1, fn(val, arr[idx], idx, arr));
  })(0, initial);
};

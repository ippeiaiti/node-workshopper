module.exports = function(messages)
{
  return messages.filter(function(x){
    return (x.message.length < 50);
  }).map(function(x){
    return x.message;
  });
};
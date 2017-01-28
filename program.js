module.exports = function(goodUsers)
{
  return function allUsersValid(submittedUsers){
    console.log(goodUsers.length);
    return goodUsers.filter((goodUser) => {
    });
  }
};

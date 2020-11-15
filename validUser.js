const checkUsersValid = (goodUsers) => {
  return (allUsersValid = (submittedUsers) => {
    return submittedUsers.every((user) => {
      return goodUsers.some((validUser) => {
        return validUser.id === user.id;
      });
    });
  });
};
module.exports = checkUsersValid;

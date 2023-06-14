export const userValidation = (user) => {
  if (user.length() <= 10) {
    return "Error";
  }
};

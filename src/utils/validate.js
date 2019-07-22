import validator from "validator";

// const emailRegexp = /\S+@\S+\.\S+/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const isFormValid = ({ email, password }) => {
  const errors = {};

  if (!validator.isEmail(email)) {
    errors.email = "Invalid email";
  }

  if (!password || !passwordRegexp.test(password)) {
    errors.password = "Invalid password";
  }

  return errors;
};

export default isFormValid;

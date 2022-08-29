export const validateEmail = (email) => {
  return email.match(/\w+@g?mail\.\D{2,3}/gm);
};

export const validatePassword = (password) => {
  return password.match(/.{6,}/gm);
};

export const validateUserEmail = (event, setErrorState, setErrorMessage) => {
  if (event.target.value === "") {
    setErrorState(false);
    setErrorMessage("Email cannot be empty");
  } else if (!validateEmail(event.target.value)) {
    setErrorState(false);
    setErrorMessage("Wrong email");
  } else {
    setErrorState(true);
  }
};

export const validateUserPassword = (event, setErrorState, setErrorMessage) => {
  if (event.target.value === "") {
    setErrorState(false);
    setErrorMessage("Password cannot be empty");
  } else if (!validatePassword(event.target.value)) {
    setErrorState(false);
    setErrorMessage("Password should be at least 6 characters");
  } else {
    setErrorState(true);
  }
};

export const validateUserPasswordRepeat = (
  event,
  setErrorState,
  setErrorMessage,
  password
) => {
  if (event.target.value === "") {
    setErrorState(false);
    setErrorMessage("Password cannot be empty");
  } else if (!validatePassword(event.target.value)) {
    setErrorState(false);
    setErrorMessage("Password should be at least 6 characters");
  } else if (password !== event.target.value) {
    setErrorState(false);
    setErrorMessage("Passwords are not same");
  } else {
    setErrorState(true);
  }
};

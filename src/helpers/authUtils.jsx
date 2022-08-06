export const validateName = (name) => {
  return name.match(/[A-Z]\D{1,}/gm)
}

export const validateEmail = (email) => {
  return email.match(/\w+@g?mail\.\D{2,3}/gm)
}

export const validatePassword = (password) => {
  return password.match(/.{4,}/gm)
}

export const validateUserName = (event, setErrorState, setErrorMessage) => {
  if (event.target.value === "") {
    setErrorState(false)
    setErrorMessage("Name cannot be empty")
  } else if (!validateName(event.target.value)) {
    setErrorState(false)
    setErrorMessage("Wrong name! First letter must be capitalize. Name must be at least 2 letters")
  } else {
    setErrorState(true)
  }
}

export const validateUserEmail = (event, setErrorState, setErrorMessage) => {
  if (event.target.value === "") {
    setErrorState(false)
    setErrorMessage("Email cannot be empty")
  } else if (!validateEmail(event.target.value)) {
    setErrorState(false)
    setErrorMessage("Wrong email")
  } else {
    setErrorState(true)
  }
}

export const validateUserPassword = (event, setErrorState, setErrorMessage) => {
  if (event.target.value === "") {
    setErrorState(false)
    setErrorMessage("Password cannot be empty")
  } else if (!validatePassword(event.target.value)) {
    setErrorState(false)
    setErrorMessage("Password has to be more than 3")
  } else {
    setErrorState(true)
  }
}

export const validateUserPasswordRepeat = (event, setErrorState, setErrorMessage, password) => {
  if (event.target.value === "") {
    setErrorState(false)
    setErrorMessage("Password cannot be empty")
  } else if (!validatePassword(event.target.value)) {
    setErrorState(false)
    setErrorMessage("Password has to be more than 3")
  } else if (password !== event.target.value) {
    setErrorState(false)
    setErrorMessage("Passwords are not same")
  } else {
    setErrorState(true)
  }
}

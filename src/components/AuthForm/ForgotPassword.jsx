import React, {useState, useRef} from 'react';
import style from "./AuthForm.module.css";
import {validateUserEmail, validateUserPassword, validateUserPasswordRepeat} from "../../helpers/authUtils";

const ForgotPassword = () => {
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");
  const [passwordRepeatError, setPasswordRepeatError] = useState("Password cannot be empty");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordRepeatValid, setPasswordRepeatValid] = useState(true);

  const passwordRef = useRef(null)

  const changePasswordHandler = () => {
    console.log('Your password changed')
  }
  return (
    <form className="d-grid gap-2 col-3 mx-auto" onSubmit={event => event.preventDefault()}>
      <h3 className={style.title}>Forgot password?</h3>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Your email"
          onChange={event => validateUserEmail(event, setEmailValid, setEmailError)}/>
        <label htmlFor="floatingInput">Your email</label>
        {!emailValid ? <div className={style.error}>{emailError}</div> : <></>}
      </div>

      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          ref={passwordRef}
          placeholder="New password"
          onChange={event => validateUserPassword(event, setPasswordValid, setPasswordError)}/>
        <label htmlFor="floatingPassword">New password</label>
        {!passwordValid ? <div className={style.error}>{passwordError}</div> : <></>}
      </div>

      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="floatingPasswordRep"
          placeholder="New password"
          onChange={event => validateUserPasswordRepeat(event, setPasswordRepeatValid, setPasswordRepeatError, passwordRef.current.value)}/>
        <label htmlFor="floatingPasswordRep">Repeat your new password</label>
        {!passwordRepeatValid ? <div className={style.error}>{passwordRepeatError}</div> : <></>}
      </div>

      <div className="d-grid gap-2 col-8 mx-auto">
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
          onClick={changePasswordHandler}>
          Change password
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;

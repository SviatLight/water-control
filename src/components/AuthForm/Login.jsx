import React, {useState} from 'react';
import {Link} from "react-router-dom";
import style from "./AuthForm.module.css"
import {validateUserEmail, validateUserPassword} from "../../helpers/authUtils"

const Login = () => {
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const loginHandler = () => {
    console.log('login')
  }

  return (
    <form className="d-grid gap-2 col-3 mx-auto" onSubmit={event => event.preventDefault()}>
      <div className="form-floating mb-3">
        <input type="email"
               className="form-control"
               id="floatingInput"
               placeholder="E-mail"
               onChange={event => validateUserEmail(event, setEmailValid, setEmailError)}/>
        <label htmlFor="floatingInput">E-mail</label>
        {!emailValid ? <div className={style.error}>{emailError}</div> : <></>}
      </div>

      <div className="form-floating">
        <input type="password"
               className="form-control"
               id="floatingPassword"
               placeholder="Password"
               onChange={event => validateUserPassword(event, setPasswordValid, setPasswordError)}/>
        <label htmlFor="floatingPassword">Password</label>
        {!passwordValid ? <div className={style.error}>{passwordError}</div> : <></>}
      </div>

      <div className={style.forgot_pswd}>
        <Link className="small mb-5 pb-lg-2 text-primary" to="/forgot_password">Forgot password?</Link>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
          onClick={loginHandler}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

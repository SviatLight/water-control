import React, {useState, useRef, useContext, useCallback} from 'react';
import style from "./AuthForm.module.css"
import {
  validateUserEmail,
  validateUserPassword,
  validateUserPasswordRepeat
} from "../../helpers/authUtils";
import {FirebaseContext} from "../../config";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom";
import {capitalizeFirstLetter} from "../../helpers/utils";
import {toast} from "react-toastify";


const Registration = () => {
  const navigate = useNavigate()
  const {auth} = useContext(FirebaseContext)

  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");
  const [passwordRepeatError, setPasswordRepeatError] = useState("Password cannot be empty");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordRepeatValid, setPasswordRepeatValid] = useState(true);

  const passwordRef = useRef(null)

  const registrationHandler = useCallback(async event => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value).then(() => {
        toast.success('You have successfully registered')
        navigate('/')
      });
    } catch (error) {
      const errorText = capitalizeFirstLetter(error.code.split('/').at(-1).replaceAll('-', ' '))
      toast.error(errorText)
    }
  });

  return (
    <form className="d-grid gap-2 col-3 mx-auto mt-0" onSubmit={registrationHandler}>
      <div className="form-floating">
        <input
          name="email"
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="E-mail"
          onChange={event => validateUserEmail(event, setEmailValid, setEmailError)}/>
        <label htmlFor="floatingInput">E-mail</label>
      </div>
      {!emailValid ? <div className={style.error}>{emailError}</div> : <></>}

      <div className="form-floating">
        <input
          type="password"
          name="password"
          className="form-control"
          id="makePassword"
          ref={passwordRef}
          placeholder="Password"
          onChange={event => validateUserPassword(event, setPasswordValid, setPasswordError)}/>
        <label htmlFor="makePassword">Password</label>
      </div>
      {!passwordValid ? <div className={style.error}>{passwordError}</div> : <></>}

      <div className="form-floating">
        <input
          type="password"
          name="passwordRepeat"
          className="form-control"
          id="makePasswordRep"
          placeholder="Repeat your password"
          onChange={event => validateUserPasswordRepeat(event, setPasswordRepeatValid, setPasswordRepeatError, passwordRef.current.value)}/>
        <label htmlFor="makePasswordRep">Repeat your password</label>
      </div>
      {!passwordRepeatValid ? <div className={style.error}>{passwordRepeatError}</div> : <></>}

      <div className="d-grid gap-2 col-6 mx-auto mt-3">
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit">
          Registration
        </button>
      </div>
    </form>
  )
};

export default Registration;

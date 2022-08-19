import React, {useState, useContext, useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import style from "./AuthForm.module.css"
import {validateUserEmail, validateUserPassword} from "../../helpers/authUtils"
import {FirebaseContext} from "../../config";
import {signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth"
import {toast} from "react-toastify";
import {capitalizeFirstLetter} from "../../helpers/utils";

const Login = () => {
  const navigate = useNavigate()
  const {auth} = useContext(FirebaseContext)

  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const loginGoogleHandler = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider).then(() => {
      toast.success('You are successfully logged in')
      navigate('/')
    })
  };

  const loginHandler = useCallback(
    async event => {
      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
          toast.success('You are successfully logged in')
          navigate('/')
        });
      } catch (error) {
        if (error.code !== 'auth/invalid-email') {
          const errorText = capitalizeFirstLetter(error.code.split('/').at(-1).replaceAll('-', ' '))
          toast.error(errorText)
        }
      }
    });

  return (
    <form className="d-grid gap-2 col-3 mx-auto mt-0" onSubmit={loginHandler}>
      <div className="form-floating">
        <input type="email"
               name="email"
               className="form-control"
               id="floatingInput"
               placeholder="E-mail"
               onChange={event => validateUserEmail(event, setEmailValid, setEmailError)}/>
        <label htmlFor="floatingInput">E-mail</label>
      </div>
      {!emailValid ? <div className={style.error}>{emailError}</div> : <></>}

      <div className="form-floating">
        <input type="password"
               name="password"
               className="form-control"
               id="floatingPassword"
               placeholder="Password"
               onChange={event => validateUserPassword(event, setPasswordValid, setPasswordError)}/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      {!passwordValid ? <div className={style.error}>{passwordError}</div> : <></>}

      <div className="d-grid gap-2 col-6 mx-auto mt-3">
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit">
          Login
        </button>

        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
          onClick={loginGoogleHandler}>
          Login with Google
        </button>
      </div>
    </form>
  );
};

export default Login;

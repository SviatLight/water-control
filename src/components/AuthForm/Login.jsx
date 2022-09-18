import React, { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import style from "./AuthForm.module.css";
import {
  validateUserEmail,
  validateUserPassword,
} from "../../helpers/authUtils";
import { FirebaseContext } from "../../config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "../../helpers/utils";
import Button from "../Base/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);

  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "Password cannot be empty"
  );

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const loginGoogleHandler = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(() => {
      toast.success("You are successfully logged in");
      navigate("/");
    });
  };

  const loginHandler = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value).then(
        () => {
          toast.success("You are successfully logged in");
          navigate("/");
        }
      );
    } catch (error) {
      if (error.code !== "auth/invalid-email") {
        const errorText = capitalizeFirstLetter(
          error.code.split("/").at(-1).replaceAll("-", " ")
        );
        toast.error(errorText);
      }
    }
  });

  return (
    <form className={style.form_wrapper} onSubmit={loginHandler}>
      <div className="form-floating mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          id="floatingInput"
          placeholder="E-mail"
          onChange={(event) =>
            validateUserEmail(event, setEmailValid, setEmailError)
          }
        />
        <label htmlFor="floatingInput">E-mail</label>
      </div>
      {!emailValid ? <div className={style.error}>{emailError}</div> : <></>}

      <div className="form-floating">
        <input
          type="password"
          name="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(event) =>
            validateUserPassword(event, setPasswordValid, setPasswordError)
          }
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      {!passwordValid ? (
        <div className={style.error}>{passwordError}</div>
      ) : (
        <></>
      )}

      <div className={style.form_btns}>
        <Button
          buttonText={"Login"}
          extraClass={`btn-lg btn-block ${style.btn_submit}`}
        />
        <Button
          buttonText={"Login with Google"}
          onClick={loginGoogleHandler}
          extraClass={`btn-lg btn-block ${style.btn_submit}`}
        />
      </div>
    </form>
  );
};

export default Login;

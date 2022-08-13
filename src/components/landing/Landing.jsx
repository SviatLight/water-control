import style from './Landing.module.css'
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {db, FirebaseContext} from "../../config";
import {useAuthState} from "react-firebase-hooks/auth";

const Landing = () => {
  const navigate = useNavigate()

  const {auth} = useContext(FirebaseContext)
  const [user] = useAuthState(auth)

  return user ?
    (
      <div>
        <h1>Welcome to water control app</h1>
        <button className='btn btn-primary' onClick={() => navigate('/setup/gender')}>Start settings</button>
        <br/>
        <button className="btn btn-danger" onClick={() => auth.signOut()}>Sign out</button>
      </div>
    )
    :
    (
      <div>
        <h1>You are not authorize</h1>
        <button className="btn btn-success" onClick={() => navigate('/login')}>Sign in</button>
      </div>
    );
}

export default Landing;

import React from 'react';
import {Outlet, useNavigate, useOutletContext} from "react-router-dom";

const LoginRequired = () => {
  const {user} = useOutletContext();
  const context = useOutletContext();
  const navigate = useNavigate();

  return user ?
    (
      <div>
        <Outlet context={context}/>
      </div>
    ) :
    navigate('/login')
};

export default LoginRequired;

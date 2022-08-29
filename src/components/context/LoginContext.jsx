import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { Outlet } from "react-router-dom";

const LoginContext = () => {
  const [userHasSettings, setUserHasSetting] = useState(false);
  const [dbUser, setDbUser] = useState({});
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const db = getDatabase();

  useEffect(() => {
    if (user) {
      onValue(
        ref(db, user.uid),
        (snapshot) => {
          const value = snapshot.val();
          setDbUser(value);
          setUserHasSetting(value ? Object.keys(value).length > 0 : false);
        },
        {
          onlyOnce: true,
        }
      );
    }
  }, [user]);

  return (
    <Outlet context={{ user, dbUser, setDbUser, userHasSettings, auth, db }} />
  );
};

export default LoginContext;

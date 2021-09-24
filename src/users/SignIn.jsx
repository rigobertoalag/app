import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { signIn, logOut, signUp } from "../store/user";

const SignIn = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  console.log(user);

  const doSignIn = () => {
    dispatch(
      signUp({
        credentials:{
          email: 'test@mail.com',
          password: '123',
          username: 'tester'
        }
      })
    );
  };

  const doLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {user ? (
        <button onClick={doLogOut}>cerrar sesion</button>
      ) : (
        <button onClick={doSignIn}>Ingresar</button>
      )}
    </div>
  );
};

export default SignIn;

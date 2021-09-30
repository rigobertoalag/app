import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../store/user";
import UserFormLayout from './UserFormLayout'

//343

const SignIn = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signIn({ credentials: data }));
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Correo electronico"
        />

        <input
          type="password"
          name="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
        />

        <input type="submit" value="Enviar" />
      </form>
    </UserFormLayout>
  );
};

export default SignIn;

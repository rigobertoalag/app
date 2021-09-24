import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../store/user";

const SignIn = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(signIn({ credentials: data }));
  };

  return (
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
  );
};

export default SignIn;

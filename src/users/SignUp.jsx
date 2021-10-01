import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "../store/user";
import UserFormLayout from "./UserFormLayout";
import AppInput from "../components/AppInput";
import { AppButton } from "../theme";
import { useNavigate } from "react-router";

const SignUp = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm();

  const dataUser = useRef(null);

  const { ref, ...rest } = register("email", { required: true });

  const onSubmit = async (data) => {
      //console.log(data)
    await dispatch(signUp({ credentials: data }));
    navigate("/videos");
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          type="email"
          name="email"
          {...rest}
          ref={(e) => {
            ref(e);
            dataUser.current = e;
          }}
          // register={{...register('email')}}
          label="Correo electronico"
        />

        <AppInput
          type="text"
          name="username"
          {...register("username", { required: true })}
          label="Nombre de usuario"
        />

        <AppInput
          type="password"
          name="password"
          {...register("password", { required: true })}
          label="Contraseña"
        />

        <AppButton type="submit" small>
          Crear cuenta
        </AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignUp;

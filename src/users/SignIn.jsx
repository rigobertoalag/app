import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../store/user";
import UserFormLayout from "./UserFormLayout";
import AppInput from "../components/AppInput";
import { AppButton } from "../theme";

const SignIn = (props) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const dataUser = useRef(null);

  const { ref, ...rest } = register('email', {required: true});

  const onSubmit = (data) => {
    dispatch(signIn({ credentials: data }));
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          type="email"
          name="email"
          {...rest}
          ref={(e) => {ref(e) 
            dataUser.current = e }}
          // register={{...register('email')}}
          label="Correo electronico"
        />

        <AppInput
          type="password"
          name="password"
          {...register('password', { required: true })}
          label="Contraseña"
        />

        <AppButton type="submit" small>Enviar</AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignIn;

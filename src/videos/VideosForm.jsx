import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createVideo } from "../store/videos";
import {
  AppButton,
  CenteredContainer,
  SmallContainer as SmallContainerTemplate,
} from "../theme";
import AppInput, { FieldSet } from "../components/AppInput";
import styled from "styled-components";

const SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

const VideosForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (video) => {
    const formData = new FormData();

    formData.append("title", video.title);
    formData.append("video", video.video[0]);

    dispatch(createVideo(formData));
  };

  return (
    <CenteredContainer>
      <SmallContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppInput
            type="text"
            name="title"
            label="Titulo"
            {...register("title", { required: true })}
          />

          <FieldSet>
            <label>Archivo del video</label>
            <input
              type="file"
              name="video"
              {...register("video", { required: true })}
            />
          </FieldSet>

          <AppButton type="submit" small>Subir</AppButton>
        </form>
      </SmallContainer>
    </CenteredContainer>
  );
};

export default VideosForm;

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createVideo } from "../store/videos";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="title"
        {...register("title", { required: true })}
        placeholder="Titulo del video"
      />
      <input
        type="file"
        name="video"
        {...register("video", { required: true })}
      />

      <input type="submit" value="Enviar" />
    </form>
  );
};

export default VideosForm;

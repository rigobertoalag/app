import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";
import Player from "./Player";

const Videos = () => {
  const dispatch = useDispatch();
  const videosState = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(loadVideos());
  }, []);

  return (
    <div>
      {videosState.data.videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <Player video={video}></Player>
        </div>
      ))}
    </div>
  );
};

export default Videos;

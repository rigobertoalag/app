import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadVideosForUser } from "../store/videos";
import Player from "../videos/Player";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const videos = useSelector((state) => state.videos.data.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVideosForUser());
  });

  return (
    <div>
        <h1>Videos de {user.username}</h1>
      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <Player video={video} />
        </div>
      ))}
    </div>
  );
};

export default Profile;

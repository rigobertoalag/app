import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";
import { SmallContainer } from "../theme";
import Video from "./Video";

const Videos = () => {
  const dispatch = useDispatch();
  const videosState = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(loadVideos());
  }, []);

  return (
    <div>
      <SmallContainer>
        {videosState.data.videos.map((video, index) => (
          <Video key={index} index={index} video={video} />
        ))}
      </SmallContainer>
    </div>
  );
};

export default Videos;

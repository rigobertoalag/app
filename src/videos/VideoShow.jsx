import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo } from "../store/videos";
import { SmallContainer } from "../theme";
import Player from "./Player";
import Video from "./Video";

const VideoShow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.videos.currentVideo);

  useEffect(() => {
    dispatch(getVideo(id));
  }, []);
  return <SmallContainer>{video && <Video video={video} />}</SmallContainer>;
};

export default VideoShow;

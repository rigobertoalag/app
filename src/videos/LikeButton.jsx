import React from "react";
import { useDispatch } from "react-redux";
import { likeVideo } from "../store/likes";
import { ClearButton, SvgButton } from "../theme";

const LikeButton = ({ video }) => {

    const dispatch = useDispatch()
    const doLike = (videoId) => {
        dispatch(likeVideo(videoId));
      };
  return (
    <div>
      <ClearButton onClick={() => doLike(video.id)}>
        <SvgButton src="/heart.svg" active={video.isLikedByCurrentUser}/>
      </ClearButton>
    </div>
  );
};

export default LikeButton;

//1047

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadVideosForUser } from "../store/videos";
import { AppButton as AppButtonTemplate, SmallContainer } from "../theme/index";
import styled from "styled-components";
import VideoThumbnail from "../videos/Thumbnail";
import LogOutButtonTemplate from "./LogOutButton";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const videos = useSelector((state) => state.videos.data.videos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadVideosForUser());
  }, []);

  return (
    <SmallContainer>
      <ProfileHeader>
        <div className="image-container">
          <ProfileImage src="/logo512.png" />
        </div>
        <div className="info-container">
          <p>
            <strong>@{user.username}</strong>
          </p>
          <Pill>{videos.length} videos</Pill>
        </div>
        <Counter area="following">
          <p className="number">0</p>
          <p className="description">Siguiendo</p>
        </Counter>
        <Counter area="followers">
          <p className="number">0</p>
          <p className="description">Siguiendo</p>
        </Counter>
        <Counter area="likes">
          <p className="number">0</p>
          <p className="description">Siguiendo</p>
        </Counter>
        <AppButton className="button">Editar</AppButton>
        <LogOutButton>Cerrar Sesion</LogOutButton>
      </ProfileHeader>
      <VideosContainer>
        {videos &&
          videos.map((video, index) => (
            <VideoThumbnail video={video} key={index} />
          ))}
      </VideosContainer>
    </SmallContainer>
  );
};

const ProfileHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
  grid-template-rows: 100px;
  grid-template-areas:
    "imageContainer imageContainer imageContainer imageContainer imageContainer imageContainer"
    "userInfo userInfo userInfo userInfo userInfo userInfo"
    "following following followers followers likes likes"
    "edit edit edit logOut logOut logOut";
  text-align: center;
  padding: ${({ theme }) => theme.dims.padding.largePadding};
  & .image-container {
    grid-area: imageContainer;
  }
  & .info-container {
    grid-area: userInfo;
  }
`;

const ProfileImage = styled.img`
  max-height: 100%;
  border-radius: 50%;
`;

const Pill = styled.span`
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
  font-size: ${({ theme }) => theme.dims.fonts.small};
  padding: ${({ theme }) => theme.dims.padding.largePadding};
  display: inline-block;
`;

const Counter = styled.div`
  grid-area: ${({ area }) => area};
  & .number {
    font-size: ${({ theme }) => theme.dims.fonts.medium};
  }
  & .description {
    color: ${({ theme }) => theme.colors.silver};
  }
`;

const AppButton = styled(AppButtonTemplate)`
  grid-area: edit;
  display: block;
  width: 100%;
`;

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
`;

const LogOutButton = styled(LogOutButtonTemplate)`
  grid-area: logOut;
  display: block;
  width: 100%;
`;

export default Profile;

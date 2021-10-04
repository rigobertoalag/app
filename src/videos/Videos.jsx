import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";
import { SmallContainer as SmallContainerTemplate } from "../theme";
import VideosList from "./VideosList";
import styled from 'styled-components'
import devices from '../theme/breakpoints'

const Videos = () => {
  const dispatch = useDispatch();
  const videosState = useSelector((state) => state.videos);

  const [loading, setloading] = useState(false)

  const loadNextPage = async() =>{
    setloading(true)
    await dispatch(
      loadVideos()
    )
    setloading(false)
  }

  return (
    <div>
      <SmallContainer>
        <VideosList videosState={videosState} loadNextPage={loadNextPage} loading={loading}></VideosList>
      </SmallContainer>
    </div>
  );
};

const SmallContainer = styled(SmallContainerTemplate)`
height:100;
@media ${devices.madiumLaptop}{
  width: ${({theme}) => theme.dims.widths.medium}
}
`

export default Videos;

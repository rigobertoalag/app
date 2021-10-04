import React from "react";
import { InfiniteLoader, List } from "react-virtualized";
import Video from "./Video";

const height = 500;
const width = 700;
const rowsHeight = 100;

const VideosList = ({ videosState, loadNextPage, loading }) => {
  const rowRenderer = ({ index, parent, key, style }) => {
    const video = videosState.data.videos[index];
    return video ? (
      <Video index={key} video={videosState.data.videos[index]} style={style} />
    ) : (
      <p>Cargando...</p>
    );
  };
  const isRowLoaded = ({ index }) => {
    return !!videosState.data.videos[index];
  };
  const loadMoreRows = loading ? ()=> {} : () => {
    loadNextPage();
  };

  const totalCount = videosState.data.nextPage ? videosState.data.videos.length + 3 : videosState.data.total;
  const videosCount = videosState.data.nextPage ? videosState.data.videos.length + 1 : videosState.data.total;

  return (
    <InfiniteLoader
      rowCount={totalCount}
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      minimumBatchSize={1}
      threshold={2}
    >
      {({ onRowsRendered, registerChild }) => (
        <List
          onRowsRendered={onRowsRendered}
          ref={registerChild}
          height={height}
          width={width}
          rowHeight={rowsHeight}
          rowCount={videosCount}
          rowRenderer={rowRenderer}
        ></List>
      )}
    </InfiniteLoader>
  );
};

export default VideosList;

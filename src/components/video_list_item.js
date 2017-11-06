import React from 'react';


const VideoListItem = ({video, onVideoSelect}) => {   //You can pull multiple props with the comma within curly braces.
  //const video = props.video;  not needed because the prop has the same name as the variable.  curly braces above does it
  const imageUrl = video.snippet.thumbnails.default.url;
    //console.log(video.id.videoId);
    return (
      <li onClick={() => onVideoSelect(video)}  className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
      </li>
  );
};

export default VideoListItem;

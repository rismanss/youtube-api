import React from 'react';

const Item = ({ video, onVideoSelect }) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <li className="media" onClick={() => onVideoSelect(video)}>
      <div className="media-body">
        <img className="" src={imageUrl} alt="{title}" />
        <p className="media-heading">{snippet.title}</p>
      </div>
    </li>
  );
};

export default Item;

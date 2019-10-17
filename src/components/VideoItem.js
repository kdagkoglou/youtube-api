import React from 'react';

const VideoItem = ({video, onVideoClick}) => {
    return (
        <li onClick={() => onVideoClick(video)} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="media">
                <img src={video.snippet.thumbnails.default.url} className="img-fluid mr-3" alt={video.snippet.title} />
            </div>
            <div className="media-body">
                <h6 className="mt-0">{video.snippet.title}</h6> 
            </div>
        </li>
    );
};

export default VideoItem;
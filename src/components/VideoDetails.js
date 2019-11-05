import React from 'react';

const VideoDetails = ({error, video}) => {
    if (error) return <div className="alert-danger mt-5">{error}</div>;
    
    if (!video) return <div>Loading...</div>;

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}?&autoplay=1`;
    
    return (
        <div className="card">
            <iframe className="embed-responsive-item" src={videoSrc} title={video.snippet.title} frameBorder="0" allowFullScreen></iframe>
            <div className="card-body">
                <h5 className="card-title">
                    {video.snippet.title}
                </h5>
                <p className="card-text">{
                    video.snippet.description}
                </p>
            </div>
        </div>
    );
};

export default VideoDetails;
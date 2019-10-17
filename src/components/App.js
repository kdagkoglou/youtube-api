import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import youtube from '../apis/youtube';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('muse');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        console.log(video);
    };

    render() {
        return (
            <div className="container">
                <SearchBar onSearchSubmit={this.onTermSubmit} />
                <div className="row">
                    <div className="col-sm-6">
                        <VideoDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="col-sm-6">
                        <VideoList videos={this.state.videos} onVideoClick={this.onVideoSelect } />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
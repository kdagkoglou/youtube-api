import React from 'react';
import SearchBar from './SearchBar';
import Checkbox from './Checkbox';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import youtube from '../apis/youtube';
import './App.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            videos: [], 
            selectedVideo: null,
            searchByTitle: '',
            checked: false
        };
    }

    componentDidMount() {
        this.onTermSubmit('react youtube api');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let term = this.state.searchByTitle;
        let fixTerm = term.replace(/-|#|\|/g,  '').trim().split(' ');
        let finalTerm = (fixTerm[0] + ' ' + fixTerm[1]).toString();
         
        if (this.state.searchByTitle !== prevState.searchByTitle && this.state.checked === true) {
            this.onTermSubmit(finalTerm);
        }
    }

    onCheckboxChange = (event) => {
        this.setState({
            checked: event.target.checked
        });
    }

    onTermSubmit = async (term) => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            });
            
            this.setState({
                videos: response.data.items,
                selectedVideo: this.state.selectedVideo === null ? response.data.items[0] : this.state.selectedVideo
            });
        } catch (err) {
            this.setState({
                error: err.toString()
            });
        }
    };
    
    onVideoSelect = (video) => {

        this.setState({
            selectedVideo: video,
            searchByTitle: video.snippet.title
        });
    };

    render() {
        return (
            <div className="container">
                <SearchBar onSubmit={this.onTermSubmit} />
                <Checkbox checked={this.state.checked} onChange={this.onCheckboxChange} />
                <div className="row">
                    <div className="col-sm-6">
                        <VideoDetails error={this.state.error} video={this.state.selectedVideo} />
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
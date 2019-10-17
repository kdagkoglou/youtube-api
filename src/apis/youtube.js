import axios from 'axios';

const KEY = 'AIzaSyDAlMuaXLULHxuvPYyQq_RhWQ4nJBW1Myg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        safeSearch: 'none',
        key: KEY
    }
});
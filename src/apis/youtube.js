import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        safeSearch: 'none',
        key: process.env.REACT_APP_API_KEY
    }
});
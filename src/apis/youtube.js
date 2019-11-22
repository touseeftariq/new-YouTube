import axios from 'axios';

const KEY = 'AIzaSyBjUhXo_ckFiKOvSPcglhOhE1zJMm0W0Ss';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
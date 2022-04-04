import axios from 'axios'

const apiUrl = process.env.API_URL;
const apiKey = process.env.KEY;

export const list = (term) => {
    return axios.get(`${apiUrl}/search`,
    {
        params: {
            part: 'snippet',
            q: term,
            key: apiKey
        }
    });
};

 export const listVideos = () => {
    return axios.get(`${apiUrl}/videos`,
    {
        params: {
            part: 'snippet',
            key: apiKey,
            chart: 'mostPopular'
        }
    });
 }

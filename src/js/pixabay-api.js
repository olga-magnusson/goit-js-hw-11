import axios from 'axios';


const API_KEY = "49754140-bd1dd51ce5d5c06d761f1a420";

export function getImagesByQuery(query){
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true'
        }
    })
        .then((response) => { return response.data; });
}
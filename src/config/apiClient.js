import axios from 'axios';


export const apiClient = (Endpoint, body) => {
    const apiUrl = process.env.REACT_APP_BASE_URL + Endpoint;
    return axios.get(apiUrl, body)
        .then(response => {
            return { data: response.data.items }
        })
        .catch(error => {
            return { error: true, message: error.message || 'something went wrong' };
        });
}
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = process.env.REACT_APP_URL;

export const Request = {

    async post(url, params) {
        return await axios.post(url, params)
    },
    async get(url) {
        return await axios.get(url)
    },
    async put(url, params) {
        return await axios.put(url, params)
    },
    async delete(url) {
        return await axios.delete(url)
    }
}

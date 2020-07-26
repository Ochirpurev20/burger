import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-a7374.firebaseio.com/',
});
export default instance;

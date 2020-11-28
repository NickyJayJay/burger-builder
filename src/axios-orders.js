import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-da469.firebaseio.com/'
});

export default instance;
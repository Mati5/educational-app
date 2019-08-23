import axios from 'axios';

export const fetchMessages = () => {
    return axios.get('/api/chat');
};

export const createMessage = (message) => {
    axios.post('/api/chat', message);
};
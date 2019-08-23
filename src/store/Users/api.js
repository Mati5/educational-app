import axios from 'axios';

export const fetchUsers = () => {
    return axios.get("/api/users");
};

export const signUp = (userData) => {
    return axios.post('/api/user', userData);
};
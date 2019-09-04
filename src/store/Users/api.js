import axios from 'axios';

export const fetchUsers = () => {
    return axios.get("/api/users");
};

export const fetchActiveUsers = () => {
    return axios.get("/api/activeUsers");
};

export const signUp = (userData) => {
    return axios.post('/api/user', userData);
};
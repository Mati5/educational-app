import axios from 'axios';

export const authenticate = (username, password) => {
    const headers = createAuthHeader(username, password);

    return axios.get(`/api/authenticate?username=${username}`, { headers: headers });
};

export const clearLogout = () => {
    return axios.post("/api/logout2", null);
}

export const logout = () => {
    return axios.post("/api/logout", null);
}

export const createAuthHeader = (username, password) => {
    return { authorization: 'Basic ' + window.btoa(username.trim().toLowerCase() + ":" + password) };
};
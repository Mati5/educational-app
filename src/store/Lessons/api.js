import axios from 'axios';

export const fetchLessons = () => {
    return axios.get('/api/lessons');
};

export const fetchSingleLesson = (idLesson) => {
    return axios.get(`/api/lesson?id=${idLesson}`);
};

export const downloadFile = (fileId) => {
    return axios.get(`/api/downloadFile/${fileId}`, { responseType:"blob" });
};

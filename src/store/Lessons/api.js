import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if ( token != null ) {
        config.headers.Authorization = JSON.parse(token);
      }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export const fetchLessons = () => {
    return axios.get('/api/lessons');
};

export const fetchSingleLesson = (idLesson) => {
    return axios.get(`/api/lesson?id=${idLesson}`);
};

export const downloadFile = (fileId) => {
    return axios.get(`/api/downloadFile/${fileId}`, { responseType:"blob" });
};

import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if ( token != null ) {
        config.headers.Authorization = token;
      }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });




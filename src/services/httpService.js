import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 30000,
  // headers: {},
})

// instance.interceptors.request.use(
//     (config) => {
//         // Do something before request is sent
//         config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     (error) => {
//         // Do something with request error
//         console.log(error);
//         return Promise.reject(error);
//     }
// );

instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    // console.log(response)
    return response
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error)

    // if (error.response !== undefined && error.response.status === 402) {
    //   console.log('error')
    //   window.location = '/'
    // } else {
    //   let msg = 'Cannot find the Server'
    //   if (
    //     error.response.data !== undefined &&
    //     error.response.data.message !== undefined
    //   ) {
    //     msg = error.response.data.message
    //     console.log(msg)
    //   }
    //   // Message.addMessage({ title: 'Error was Occured!', msg, type: 'danger' });
    // }
    return Promise.reject(error)
  }
)

export default instance

import axios from 'axios';

export default axios.create({
  baseURL: 'https://beernote-api.herokuapp.com/',
});

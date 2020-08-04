const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://brunoflix1.herokuapp.com';

export default {
  URL,
};
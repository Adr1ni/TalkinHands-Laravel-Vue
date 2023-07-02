import axios from 'axios';

const searchWord = (word) => {
  return axios.get('/api/search', {
    params: { word: word },
  })
    .then(response => {
      console.log(response.data.result);
      return response.data.result; 
    });
};

export { searchWord };






const axios = require('axios');


function fetchApi(urls) {
  const promises = urls.map(url => axios.get(url));

  return Promise.all(promises)
    .then(responses => {
      return responses.map(response => response.data);
    })
   
}
const urls = ['http://bit.ly/2mTM3nY','http://bit.ly/2mTM3nY','http://bit.ly/2mTM3nY']


fetchApi(urls)
  .then(allData => {
    console.log(allData);
  })
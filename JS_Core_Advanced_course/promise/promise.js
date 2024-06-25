const axios = require('axios');

async function fetchMultipleAPIs(urls) {


    const requests = urls.map(url => axios.get(url));

    const responses = await Promise.all(requests);


    const data = responses.map(response => response.data);

    const allData = data.reduce((sum, data) => {
      return sum.concat(data);
    }, []);

    return allData;
  
}
const urls = ['http://bit.ly/2mTM3nY','http://bit.ly/2mTM3nY','http://bit.ly/2mTM3nY']


fetchMultipleAPIs(urls)
  .then(allData => {
    console.log(allData);
  })
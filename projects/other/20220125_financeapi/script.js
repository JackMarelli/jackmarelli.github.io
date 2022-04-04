var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
  params: {modules: 'defaultKeyStatistics,assetProfile'},
  headers: {
    'x-api-key': 'YOUR-PERSONAL-API-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
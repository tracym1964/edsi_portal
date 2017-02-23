var axios = require('axios')


function getReportAPI (reportQuery, cb) {
    return axios.post('api/get_report/', {
      query: reportQuery,
    })
    .then(function (response) {
      console.log("response", response.data)
      cb({
        data: response.data,
        error: false
      });
    }).catch(function (error) {
      if (error.response) {
        if (error.response.status == 404) {
          cb({
            error: true
          })
        }
        console.log('status', error.response.status);
      } else {
        console.log('Error', error.message);
      }
    });
};

var helpers = {
  getReport: function (reportQuery, cb) {
    getReportAPI (reportQuery, (res) => {
      cb(res)
    });
  },
}

module.exports = helpers;

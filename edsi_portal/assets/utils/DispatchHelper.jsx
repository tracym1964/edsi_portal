var axios = require('axios')
var LoginHelper = require('./LoginHelper')


function testnewapi (cb) {
  return axios.post('/api/test/', {
    test: 'hello'
  }).then(function (response) {
      console.log("response", response)
    }).catch(function (error) {
      console.log(error);
    });
};

function getInitialLoad (cb) {
  return axios.post('/api/get_create_initial/')
    .then(function (response) {
      console.log("response", response)
      cb({
        call_type: response.data.call_type,
        priority: response.data.priority,
        techs: response.data.techs,
        status: response.data.status,
        customer_search_fields: response.data.customer_search_fields,
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

function custSearchApi (text, type, cb) {
    return axios.post('/api/customer_search/', {
      search_text: text,
      search_type: type,
    }).then(function (response) {
      console.log("response", response)
      cb(response.data.customers);
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

function createDispatchApi (disp, cb) {
    return axios.post('/api/create_dispatch', {
      dispatch: disp,
    }).then(function (response) {
      console.log('response', response)
      cb({
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

function custEquipmentApi (cust_id, cb) {
    return axios.post('/api/customer_equipment/', {
      _id: cust_id
    }).then(function (response) {
      console.log("response", response)
      cb(response.data.equipment);
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

function custDispatchApi (cust_id, cb) {
    return axios.post('/api/customer_dispatches/', {
      _id: cust_id
    }).then(function (response) {
      console.log("response", response)
      cb(response.data.dispatches);
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

function getDashboardAPI (cb) {
    return axios.post('api/dashboard_initial/')
    .then(function (response) {
      console.log("response", response)
      cb(response.data)
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

function getDispatchSearchInfoAPI (searchQuery, cb) {
    return axios.post('api/dispatch_search/', {
      query: searchQuery,
    })
    .then(function (response) {
      console.log("response", response)
      cb(response.data);
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

function getDashboardDispatchHistoryAPI (cb) {
    return axios.post('api/dashboard_dispatch_history/')
    .then(function (response) {
      console.log("response", response)
      cb(response.data)
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

function getDashboardGaugeAPI (cb) {
    return axios.post('api/dashboard_gauge/')
    .then(function (response) {
      console.log("response", response)
      cb(response.data)
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

function createPotCust (new_customer, cb) {
    console.log('customer', new_customer);
    return axios.post('api/create_pot_customer/', {
      customer: new_customer,
    })
    .then(function (response) {
      console.log("response", response.data)
      cb({
        data: response.data,
        error: false
      });;
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

function getReportInitLoadAPI (cb) {
  return axios.post('/api/get_initial_reports/')
    .then(function (response) {
      console.log("response", response)
      cb({
        terr_list: response.data.terr_list,
        region_list: response.data.region_list,
        report_list: response.data.report_list,
        customer_search_fields: response.data.customer_search_fields,
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
  getInitLoad: function (cb) {
    getInitialLoad ( (res) => {
      cb(res)
    });
  },
  getSearchInfo: function(text, type, cb) {
    custSearchApi (text, type, (res) => {
      cb(res)
    });
  },
  createDispatch: function(dispatch, cb) {
    createDispatchApi(dispatch, (res) => {
      cb(res)
    });
  },
  getSelectedEquipment: function(customer_id, cb) {
    custEquipmentApi (customer_id, (res) => {
      cb(res)
    });
  },
  getSelectedDispatch: function(customer_id, cb) {
    custDispatchApi (customer_id, (res) => {
      cb(res)
    });
  },
  getDashboardDispatches: function(cb) {
    getDashboardAPI ( (res) => {
      cb(res)
    })
  },
  getDispatchSearchInfo: function(searchQuery, cb) {
    getDispatchSearchInfoAPI (searchQuery, (res) => {
      cb(res)
    })
  },
  testapi: function() {
    testnewapi()
  },
  getDashboardGauge: function(cb){
    getDashboardGaugeAPI ( (res) => {
      cb(res)
    })
  },
  getDispatchHistory: function(cb){
    getDashboardDispatchHistoryAPI ( (res) => {
      cb(res)
    })
  },
  createPotentialCust: function(customer, cb){
    createPotCust (customer, (res) => {
      cb(res)
    })
  },
  getReportInitLoad: function(cb){
    getReportInitLoadAPI ( (res) => {
      cb(res)
    })
  },
};

module.exports = helpers;

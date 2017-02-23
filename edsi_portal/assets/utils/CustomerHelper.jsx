var axios = require('axios');


function getBillToAPI (text, cb) {
    return axios.post('api/get_billto_search/', {
        billto: text
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

function getEntAPI (text, cb) {
    return axios.post('api/get_ent_search/', {
        ent: text
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

function getOrgAPI (text, cb) {
    return axios.post('api/get_org_search/', {
        org: text
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

function getTreeonSelect (settings, cb) {
    return axios.post('api/get_cust_tree/', {
        list: settings
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

function generateDispatches (terr, interval, cb) {
    return axios.post('api/create_scheduled_maintenance/', {
        territory: terr,
        interval: interval
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

function getCustomerBilltoAPI  (billto, cb) {
    return axios.post('api/get_customers_for_billto/', {
        billto: billto
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

function sendTimeSave (item, cb) {
    return axios.post('api/process_tech_time/', {
        record: item
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

function makeCustomerTreeEditAPI (edit, cb) {
    console.log('edit', edit)
    return axios.post('api/customer_tree_edit/', {
        record: edit
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
    getBillToInfo: function (text, cb) {
        getBillToAPI (text, (res) => {
            cb(res)
        });
    },
    getEntInfo: function (text, cb) {
        getEntAPI (text, (res) => {
            cb(res)
        });
    },
    getOrgInfo: function (text, cb) {
        getOrgAPI (text, (res) => {
            cb(res)
        });
    },
    getTreeInfo: function (settings, cb) {
        getTreeonSelect (settings, (res) => {
            cb(res)
        });
    },
    genDispatches: function (terr, interval, cb) {
        generateDispatches (terr, interval, (res) => {
            cb(res)
        });
    },
    editTimeSave: function (item, cb) {
        sendTimeSave (item, (res) => {
            cb(res)
        });
    },
    getCustomersbyBillto: function (billto, cb) {
        getCustomerBilltoAPI (billto, (res) => {
            cb(res)
        });
    },
    sendSaveEdit: function (edit, cb) {
        makeCustomerTreeEditAPI (edit, (res) => {
            cb(res)
        });
    },
}

module.exports = helpers;
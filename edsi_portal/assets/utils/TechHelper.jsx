var axios = require('axios');


function getTechInfoAPI (tech_id, cb) {
    return axios.post('api/get_tech_info/', {
        tech: tech_id
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

function editGroupSaveAPI (record, cb) {
    return axios.post('api/edit_group/', {
        edit: record
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

function getTechAssInitLoad (cb) {
    return axios.post('api/get_tech_assign_initial/', {
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

function replaceAllSave (record, cb) {
    return axios.post('api/replace_all_tech/', {
        value: record
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


function runTechReportAPI (report, cb) {
    return axios.post('api/run_tech_report/', {
        report: report
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

function getTechsTerritoryAPI (terr, cb) {
    return axios.post('api/get_techs_for_territory/', {
        territory: terr
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
    getTechInfo: function (tech, cb) {
        getTechInfoAPI (tech, (res) => {
            cb(res)
        });
    },
    getTechAssignmentInitalLoad: function (cb) {
        getTechAssInitLoad ( (res) => {
            cb(res)
        });
    },
    editGroupSave: function (record, cb) {
        editGroupSaveAPI (record, (res) => {
            cb(res)
        })
    },
    replaceAllSave: function (record, cb) {
        replaceAllSave (record, (res) => {
            cb(res)
        })
    },
    runTechReport: function (report, cb) {
        runTechReportAPI (report, (res) => {
            cb(res)
        })
    },
    getTechsTerritory: function(terr, cb) {
        getTechsTerritoryAPI (terr, (res) => {
            cb(res)
        })
    },
}

module.exports = helpers;
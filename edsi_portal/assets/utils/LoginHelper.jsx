var axios = require('axios');
var axiosDefaults = require("axios/lib/defaults");

axiosDefaults.xsrfCookieName = "csrftoken";
axiosDefaults.xsrfHeaderName = "X-CSRFToken";


helpers = {
    login: function(username, pass, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                localStorage.user = res.username
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    },

    logout: function() {
        delete localStorage.token
        delete localStorage.user
        this.removeSession()
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, pass, cb) {
        axios.post('/api/login/', {
          username: username,
          password: pass
        }).then(function (response) {
          cb({
            token: response.data.token,
            authenticated: true,
            username: response.data.user.fullname
          });
        }).catch(function (error) {
            console.log(error)
            cb({authenticated: false})
        });
    },

    removeSession: function(cb) {
      axios.post('/api/logout/')
      .then(function (response) {
      }).catch(function (error) {
        if (error.response) {
          if (error.response.status == 404) {
          }
          console.log('status', error.response.status);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
    },

    getUserApps: function(cb) {
        return axios.post('/api/get_user_applications/')
        .then(function (response) {
          console.log("response", response)
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
    }
}

module.exports = helpers;

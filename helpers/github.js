const request = require('request');
const config = require('../config.js');
const Promise = require('bluebird');

let getReposByUsername = (username) => {
  return new Promise ((resolve, reject) => {
    let options = {
      url: `https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };

    request.get(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  })
}

module.exports.getReposByUsername = getReposByUsername;
const express = require('express');
const app = express();
const parser = require('body-parser');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  gitHub.getReposByUsername(req.body.input)
    .then((data) => {
      return db.save(data);
    })
  res.send();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


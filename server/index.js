const express = require('express');
const app = express();
const parser = require('body-parser');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');
const sorter = require('../helpers/sizesorter.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded({extended: true}));

app.post('/repos', function (req, res) {
  Repo.findOne({'username': `${req.body.input}`}).then((person) => {
    if (!person) {
      gitHub.getReposByUsername(req.body.input)
        .then((reposFromGitHub) => {
          return db.save(reposFromGitHub);
        })
    }
  })
});

app.get('/repos', function (req, res) {
  Repo.find({}).then((results) => {
    let sortedRepoArray = sorter.sortRepos(results);
    res.send(sortedRepoArray.slice(0, 25))
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


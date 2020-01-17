const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repoName: String,
  forks: Number,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repositories) => {
  let data = repositories[0];
  console.log(data);
  Repo.create({
    username: `${data.owner.login}`,
    repoName: `${data.name}`,
    forks: `${data.forks}`,
    stars: `${data.stargazers_count}`
  }, (err, repo) => {
    if (err) throw err;
  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;
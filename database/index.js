const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repoName: String,
  forks: Number,
  stars: Number,
  picture: String,
  size: Number
});

Repo = mongoose.model('Repo', repoSchema);

let save = (repositories) => {
  let mapped = repositories.map(repo => {
    return {
      username: `${repo.owner.login}`,
      repoName: `${repo.name}`,
      forks: `${repo.forks}`,
      stars: `${repo.stargazers_count}`,
      picture: `${repo.owner.avatar_url}`,
      size: `${repo.size}`
    }
  })
  Repo.insertMany(mapped).then((docs) => {
    return docs;
  });
}

module.exports.save = save;
module.exports.Repo = Repo;
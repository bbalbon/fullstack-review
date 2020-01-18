import React from 'react';

const RepoListEntry = (props) => (
  <div className="repo">
    <img src={props.repo.picture} className="avatar"/><h3 id="username">{props.repo.username}</h3><h3 id="reponame">{props.repo.repoName}</h3>
  </div>
)

export default RepoListEntry;
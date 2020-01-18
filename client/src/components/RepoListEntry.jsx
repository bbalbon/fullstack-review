import React from 'react';

const RepoListEntry = (props) => (
  <tr className="repo">
    <td>
      <img src={props.repo.picture} className="avatar"/>
    </td>
    <td>
    <h3 id="username">{props.repo.username}</h3>
    </td>
    <td>
      <h3 id="reponame">{props.repo.repoName}</h3>
    </td>
    <td>
      <h3 id="forks"> Forks: {props.repo.forks}</h3>
    </td>
    <td>
      <h3 id="stars"> Stars: {props.repo.stars}</h3>
    </td>
    <td>
      <h3 id="size"> Size: {props.repo.size}</h3>
    </td>
  </tr>
)

export default RepoListEntry;
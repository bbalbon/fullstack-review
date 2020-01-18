import React from 'react';

const RepoListEntry = (props) => (
  <tr className="repo">
    <td className="avatarborder">
      <img src={props.repo.picture} className="avatar"/>
    </td>
    <td className="usernamebackground">
      <a href="https://www.google.com" className="username" target="_blank">{props.repo.username}</a>
    </td>
    <td>
      <h3 className="reponame">{props.repo.repoName}</h3>
    </td>
    <td className="forksbackground">
      <h3 className="forks"> Forks: {props.repo.forks}</h3>
    </td>
    <td className="starsbackground">
      <h3 className="stars"> Stars: {props.repo.stars}</h3>
    </td>
    <td className="sizebackground">
      <h3 className="size"> Size: {props.repo.size}</h3>
    </td>
  </tr>
)

export default RepoListEntry;
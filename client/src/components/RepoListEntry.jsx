import React from 'react';

const RepoListEntry = (props) => (
  <tr className="repo">
    <td className="avatarborder">
      <img src={props.repo.picture} className="avatar"/>
    </td>
    <td className="usernamebackground">
      <h3 className="username">{props.repo.username}</h3>
    </td>
    <td className="reponamebackground">
      <a href={`${props.repo.url}`} className="reponame" target="_blank">{props.repo.repoName}</a>
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
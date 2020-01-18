import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <table id="repolist" cellPadding="5" cellSpacing="8">
    <tbody>
      {props.repos.map((repo, i) => (
        <RepoListEntry key={i} repo={repo}/>
      ))}
    </tbody>
  </table>
)

export default RepoList;
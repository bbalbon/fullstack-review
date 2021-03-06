import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount () {
    $.ajax({
      type: 'GET',
      url: '/repos',
      success: (data) => {
        this.setState({
          repos : data
        })
      }
    })
  }

  search (term) {
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: {
        input: `${term}`
      },
      success: () => {
        console.log('hit');
        $.ajax({
          type: 'GET',
          url: '/repos',
          success: (data) => {
            this.setState({
              repos : data
            })
          }
        })
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <h4>There are {this.state.repos.length} repos sorted by size.</h4>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
      <br />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
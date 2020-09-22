import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list'
import './App.css';
import { SearchBox } from './component/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => (
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox placeholder="Search Robot" handleChange={this.handleChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;

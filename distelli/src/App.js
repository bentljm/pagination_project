import React, { Component } from 'react';
import Navigation from './components/Navigation';
import TableContainer from './components/TableContainer';
import './components/styles/Navigation.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['Nav Item 1', 'Nav Item 2', 'Nav Item 3'],
      active: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    this.setState({ active: e.target.getAttribute('name') });
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <ul>
          {this.state.navItems.map(item =>
            <Navigation
              active={this.state.active}
              handleClick={this.handleClick}
              item={item}/> )}
          </ul>
        </div>
        <TableContainer />
      </div>
    );
  }
}

export default App;

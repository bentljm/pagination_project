import React, { Component } from 'react';

class Navigation extends Component {

  checkActiveClass() {
    for (var key in this.refs) {
      var ref = this.refs[key];
      ref.classList.remove('active');
      if (ref.getAttribute('name') === this.props.active) {
        ref.classList.add('active');
      }
    }
  }

  render() {
    this.checkActiveClass();
    return (
      <li
        onClick={e => this.props.handleClick(e)}
        ref={this.props.item}
        name={this.props.item}>
        {this.props.item}
      </li>
    );
  }
}

export default Navigation;

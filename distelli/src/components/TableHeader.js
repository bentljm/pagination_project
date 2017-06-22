import React, { Component } from 'react';
import './styles/Table.css';

class TableHeader extends Component {

  render() {
    return (
      <thead className='header'>
        <tr>
          <th onClick={e => this.props.onColumnClick(e)} className='firstname'>First Name</th>
          <th onClick={e => this.props.onColumnClick(e)} className='lastname'>Last Name</th>
          <th onClick={e => this.props.onColumnClick(e)} className='country'>Country</th>
          <th onClick={e => this.props.onColumnClick(e)} className='address'>Address</th>
          <th onClick={e => this.props.onColumnClick(e)} className='city'>City</th>
          <th onClick={e => this.props.onColumnClick(e)} className='state'>State</th>
          <th onClick={e => this.props.onColumnClick(e)} className='zip'>Zip</th>
          <th onClick={e => this.props.onColumnClick(e)} className='phone'>Phone</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

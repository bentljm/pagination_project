import React, { Component } from 'react';
import './styles/Table.css';

class TableHeader extends Component {

  render() {
    return (
      <thead className='header'>
        <tr>
          <th onClick={e => this.props.onColumnClick(e, 'firstname')} className='name'>First Name</th>
          <th onClick={e => this.props.onColumnClick(e, 'lastname')} className='name'>Last Name</th>
          <th onClick={e => this.props.onColumnClick(e, 'country')} className='country'>Country</th>
          <th onClick={e => this.props.onColumnClick(e, 'address')} className='address'>Address</th>
          <th onClick={e => this.props.onColumnClick(e, 'city')} className='city'>City</th>
          <th onClick={e => this.props.onColumnClick(e, 'state')} className='state'>State</th>
          <th onClick={e => this.props.onColumnClick(e, 'zip')} className='zip'>Zip</th>
          <th onClick={e => this.props.onColumnClick(e, 'phone')} className='phone'>Phone</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

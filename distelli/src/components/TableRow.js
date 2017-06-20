import React, { Component } from 'react';
import './styles/Table.css';

class TableRow extends Component {

  render() {
    return (
      <tbody className='row'>
        <tr>
          <td className='name'>{this.props.firstName}</td>
          <td className='name'>{this.props.lastName}</td>
          <td className='country'>{this.props.country}</td>
          <td className='address'>{this.props.address}</td>
          <td className='city'>{this.props.city}</td>
          <td className='state'>{this.props.state}</td>
          <td className='zip'>{this.props.zip}</td>
          <td className='phone'>{this.props.phone}</td>
        </tr>
      </tbody>
    );
  }
}

export default TableRow;

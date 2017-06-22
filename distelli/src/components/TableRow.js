import React, { Component } from 'react';
import './styles/Table.css';

class TableRow extends Component {

  render() {
    return (
      <tbody className='row'>
        <tr>
          <td className='firstname'>{this.props.data.firstname}</td>
          <td className='lastname'>{this.props.data.lastname}</td>
          <td className='country'>{this.props.data.country}</td>
          <td className='address'>{this.props.data.address}</td>
          <td className='city'>{this.props.data.city}</td>
          <td className='state'>{this.props.data.state}</td>
          <td className='zip'>{this.props.data.zip}</td>
          <td className='phone'>{this.props.data.phone}</td>
        </tr>
      </tbody>
    );
  }
}

export default TableRow;

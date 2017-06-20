import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component {

  render() {
    return (
      <table>
        <TableHeader onColumnClick={this.props.onColumnClick} />
        {this.props.filteredData.map(data =>
          <TableRow
            firstName={data.firstname}
            lastName={data.lastname}
            country={data.country}
            address={data.address}
            city={data.city}
            state={data.state}
            zip={data.zip}
            phone={data.phone} />
        )}
      </table>
    );
  }
}

export default Table;

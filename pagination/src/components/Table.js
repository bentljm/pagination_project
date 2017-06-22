import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends Component {

  render() {
    return (
      <table>
        <TableHeader onColumnClick={this.props.onColumnClick} />
        {this.props.filteredData.map(data =>
          <TableRow data={data} />
        )}
      </table>
    );
  }
}

export default Table;

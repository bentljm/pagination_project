import React, { Component } from 'react';
import TableNav from './TableNav';
import Table from './Table';
import data from '../data.json';
import { extend } from 'underscore';

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      sortBy: 'Last Name',
      itemsPerPage: 10,
      currentPage: 1,
      filteredData: [],
      itemsPerPageOptions: [5,10,25,50,75,100],
      sortingOptions: ['First Name', 'Last Name', 'Country', 'Address', 'City', 'State', 'Zip', 'Phone'],
      sortingDirection: {'firstname': true, 'lastname': true, 'country': true, 'address': true, 'city': true, 'state': true,
        'zip': true, 'phone': true, }
    };
    this.getTotal = this.getTotal.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onColumnClick = this.onColumnClick.bind(this);
    this.filterData = this.filterData.bind(this);
    this.sortData = this.sortData.bind(this);
    this.getEndIndex = this.getEndIndex.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  getTotal() {
    return this.state.data.length;
  }

  onSelectChange(e, option) {
    if (option === 'sortBy') {
      this.setState({ sortBy: e.target.value });
      this.sortData(e.target.value, this.state.sortBy);
    } else {
      this.setState({ itemsPerPage: e.target.value })
    }
  }

  onColumnClick(e) {
    var clicked = e.target.getAttribute('class');
    this.setState({ sortBy: clicked });
    this.sortData(clicked, this.state.sortBy);
  }

  filterData() {
    var total = this.getTotal();
    var startIndex = (this.state.currentPage - 1) * this.state.itemsPerPage;
    var endIndex = this.state.currentPage * this.state.itemsPerPage;
    if (endIndex > total) {
      startIndex = total - this.state.itemsPerPage;
      endIndex = total;
    }
    return this.state.data.slice(startIndex, endIndex);
  }

  sortData(sortBy, previousSortBy) {
    sortBy = sortBy.toLowerCase().replace(' ', '');
    previousSortBy = previousSortBy.toLowerCase().replace(' ', '');
    var ascending = this.state.sortingDirection[sortBy];
    if (sortBy === previousSortBy) {
      ascending = !ascending;
      this.setState({ sortingDirection: extend(this.state.sortingDirection, { [sortBy]: ascending })});
    }
    var data = this.state.data.sort(function(a, b) {
      if(a[sortBy] < b[sortBy]) {
        return ascending ? -1 : 1;
      }
      if(a[sortBy] > b[sortBy]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    this.setState({ data })
  }

  getEndIndex(startIndex) {
    return startIndex + parseInt(this.state.itemsPerPage, 10);
  }

  nextPage() {
    var total = this.getTotal();
    var startIndex = this.state.currentPage * this.state.itemsPerPage;
    var endIndex = this.getEndIndex(startIndex);
    if (endIndex <= total) {
      this.setState({ currentPage: this.state.currentPage+1 })
      return this.state.data.slice(startIndex, endIndex);
    }
  }

  previousPage() {
    var total = this.getTotal();
    var startIndex = (this.state.currentPage - 2) * this.state.itemsPerPage;
    var endIndex = this.getEndIndex(startIndex);
    if (endIndex > total) {
      var totalPages = Math.floor(total / this.state.itemsPerPage) - 1;
    }
    if (startIndex >= 0) {
      this.setState({ currentPage: totalPages || this.state.currentPage-1 })
      return this.state.data.slice(startIndex, endIndex);
    }
  }

  render() {
    const { sortBy, currentDirection, itemsPerPage, currentPage, sortingOptions, itemsPerPageOptions } = this.state;
    return (
      <div>
        <TableNav
          sortBy={sortBy}
          currentDirection={currentDirection}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          sortingOptions={sortingOptions}
          itemsPerPageOptions={itemsPerPageOptions}
          onSelectChange={this.onSelectChange}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
          total={this.getTotal()} />
        <Table
          onColumnClick={this.onColumnClick}
          filteredData={this.filterData()}/>
      </div>
    );
  }
}

export default TableContainer;

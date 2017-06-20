import React, { Component } from 'react';
import './styles/TableNav.css';

class TableNav extends Component {

  renderNumbers(currentPage, itemsPerPage, total) {
    var startIndex = (currentPage - 1) * itemsPerPage || 1;
    var endIndex = currentPage * itemsPerPage;
    if (startIndex >= total) {
      startIndex = total - itemsPerPage;
      endIndex = total;
    }
    return `${startIndex}-${endIndex}`;
  }

  render() {
    const numbers = this.renderNumbers(this.props.currentPage, this.props.itemsPerPage, this.props.total);
    return (
      <div className='nav'>
        <div className='title'>List of Awesome</div>
        <div className='divider'>|</div>
        <div className='sortBy'>Sort by:
          <select className='firstSelect' onChange={e => this.props.onSelectChange(e, 'sortBy')} value={this.props.sortBy}>
            {this.props.sortingOptions.map(item =>
              <option value={item}>{item}</option>)}
          </select>
        </div>
        <div className='itemsPerPage'>items per page:
          <select className='secondSelect' onChange={e => this.props.onSelectChange(e, 'itemsPerPage')} value={this.props.itemsPerPage}>
            {this.props.itemsPerPageOptions.map(item =>
              <option value={item}>{item}</option>)}
          </select>
        </div>
        <div className='pagination'>{numbers}</div><div className='of'>of</div><div className='pagination'>{this.props.total}</div>
        <a onClick={e => this.props.previousPage()} className="previous">&#60;</a>
        <a onClick={e => this.props.nextPage()} className="next">&#62;</a>
      </div>
    );
  }
}

export default TableNav;

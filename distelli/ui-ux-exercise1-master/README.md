
## Exercise

**Given** a javascript array of 100,000 objects where each object is an address containing the following fields (assume that this array is returned by an ajax call):


* FirstName
* LastName
* Country
* Street
* City
* State
* Zip
* Phone


**Build** a single page and react JS component that implements an HTML/CSS table that displays the data as rows

## Components

* App.js -- Container component for app
  handleClick() -- updates active state variable to nav item that is currently selected

  * Navigation.js -- Top Nav component
    checkActiveClass() -- adds 'active' class to nav item that is currently selected

  * TableContainer.js -- Container for Table and TableNav Components
    getTotal() -- returns total length of data array
    onSelectChange() -- updates sorting criteria based on dropdown menu
    onColumnClick() -- updates sorting criteria based on selected column header
    filterData() -- renders data based on current page and items per page
    sortData() -- sorts data based on sorting criteria
    getEndIndex() -- returns endIndex of current page
    nextPage() -- renders next set of data based on next page and items per page
    previousPage() -- renders previous set of data based on previous page and items per page

    * TableNav.js -- Table nav component
      renderNumbers() -- renders start and end index for pagination

    * Table.js -- Container for TableHeader and TableRow components

      * TableHeader.js -- Creates header for each field in data set

      * TableRow.js -- Creates row component for each address in data set






import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = props => {
const data = {
  columns: [
    {
      label: 'Rank',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'Name',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Score',
      field: 'last',
      sort: 'asc'
    },
  ],
  rows: [
    {
      'Rank': 1,
      'Name': 'Arjun Bharadwaj',
      'Score': '98',
    },
    {
        'Rank': 2,
        'Name': 'Arjun Bharadwaj',
        'Score': '98',
      },
      {
        'Rank': 3,
        'Name': 'Arjun Bharadwaj',
        'Score': '98',
      },
      {
        'Rank': 4,
        'Name': 'Arjun Bharadwaj',
        'Score': '98',
      },
      {
        'Rank': 5,
        'Name': 'Arjun Bharadwaj',
        'Score': '98',
      },
      {
        'Rank': 6,
        'Name': 'Arjun Bharadwaj',
        'Score': '98',
      },
      {
        'Rank': 7,
        'Name': 'Arjun Bharadwaj',
        'Score': '98',
      },
  ]
};

return (
    <MDBTable scrollY maxHeight="98%">
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default TablePage;
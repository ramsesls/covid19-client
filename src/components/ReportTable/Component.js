import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from 'components/Title';

export default function ReportByCountries({ data }) {
  return (
    <React.Fragment>
      <Title>Report By Countries</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Confirmed</TableCell>
            <TableCell>Recovered</TableCell>
            <TableCell>Deaths</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.countryRegion}{row.provinceState ? ` (${row.provinceState})` : ''}</TableCell>
              <TableCell>{row.confirmed}</TableCell>
              <TableCell>{row.recovered}</TableCell>
              <TableCell>{row.deaths}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

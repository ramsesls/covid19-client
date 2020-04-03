import React, { useState, useCallback } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import TableRow from './TableRow';
import Title from 'components/Title';
import { formatDate } from 'utils';

const filterInputProps = { 'aria-label': 'filter by country name' };

export default function ReportByCountries({ data }) {
  const [filter, setFilter] = useState('');

  const handleFilterChange = useCallback(ev => {
    setFilter(ev.target.value.toLowerCase());
  }, [setFilter]);

  return (
    <React.Fragment>
      <Title>Report By Countries</Title>
      <TextField
        inputProps={filterInputProps}
        label="filter by country name..."
        type="search"
        onChange={handleFilterChange}
      />
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
          {data.filter(item => item.countryRegion.toLowerCase().includes(filter)).map((row, index) => (
            <Tooltip key={index} title={`Last update: ${formatDate(row.lastUpdate)}`} placement="left">
              <TableRow>
                <TableCell>{row.countryRegion}{row.provinceState ? ` (${row.provinceState})` : ''}</TableCell>
                <TableCell>{row.confirmed}</TableCell>
                <TableCell>{row.recovered}</TableCell>
                <TableCell>{row.deaths}</TableCell>
                <TableCell align="right">{row.active}</TableCell>
              </TableRow>
            </Tooltip>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

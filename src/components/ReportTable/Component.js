import React, { useMemo, useState, useCallback } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import TableRow from './TableRow';
import TableHeadCell from './TableHeadCell';
import Title from 'components/Title';
import { formatDate } from 'utils';

const columns = [
  { dataKey: 'countryRegion', label: 'Country' },
  { dataKey: 'confirmed', label: 'Confirmed' },
  { dataKey: 'recovered', label: 'Recovered' },
  { dataKey: 'deaths', label: 'Deaths' },
  { dataKey: 'active', label: 'Active', props: { align: 'right' } },
];
const filterInputProps = { 'aria-label': 'filter by country name' };

function ascSorting(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return 1;
  if (b[orderBy] > a[orderBy]) return -1;
  return 0;
}

function getComparator(orderBy, order) {
  return (a, b) => (order === 'asc' ? 1 : -1) * ascSorting(a, b, orderBy);
}

export default function ReportByCountries({ data }) {
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('confirmed');

  const handleFilterChange = useCallback(ev => {
    setFilter(ev.target.value.toLowerCase());
  }, []);

  const handleSortChange = useCallback(id => {
    const sameColumn = orderBy === id;
    setOrder(prev => sameColumn && prev === 'asc' ? 'desc' : 'asc');
    setOrderBy(id);
  }, [orderBy]);

  const filteredData = useMemo(
    _ => data.filter(item => item.countryRegion.toLowerCase().includes(filter)),
    [data, filter],
  );

  const sortedData = useMemo(
    _ => filteredData.sort(getComparator(orderBy, order)),
    [filteredData, order, orderBy],
  );

  return (
    <>
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
            {columns.map(({ dataKey, label, props }) => (
              <TableHeadCell
                key={dataKey}
                id={dataKey}
                order={order}
                orderBy={orderBy}
                onSortChange={handleSortChange}
                {...props}
              >
                {label}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, index) => (
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
    </>
  );
}

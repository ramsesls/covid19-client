import React, { useMemo } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import dayjs from 'dayjs';

import Loading from 'components/Loading';
import Map from 'sections/Historical/Map';
import Chart from 'sections/Historical/Chart';

import { useHistorical } from 'api';
import { historical } from 'config';

import useStyles from './styles';

const dateFormat = historical.dates.format;

const getFormattedDate = (date, format = dateFormat) => {
  return dayjs(date).format(format);
}

export default function Content({
  mode,
  from,
  to,
  criterion,
  selectedCountries,
  currentDate,
}) {
  const classes = useStyles();
  const [data, isLoading] = useHistorical(getFormattedDate(from), getFormattedDate(to));

  const prevDayDate = useMemo(_ => {
    return getFormattedDate(dayjs(currentDate, historical.dates.format).subtract(1, 'days'));
  }, [currentDate]);

  const currentDataForMap = useMemo(_ => {
    if (data && mode === 'map') {
      return data[currentDate] || data[prevDayDate];
    }
  }, [data, mode, currentDate, prevDayDate]);

  return (
    <Box display="flex" className={classes.root}>
      {
        isLoading
          ? <Loading />
          : <div className="full-size">
            {
              mode === 'map'
                ? currentDataForMap
                ? <Map
                    data={currentDataForMap}
                    criterion={criterion}
                    by="countryRegion"
                  />
                : <Container>No Data</Container>
                : <Chart
                    data={data}
                    selected={selectedCountries}
                    criterion={criterion}
                    currentDate={currentDate}
                 />
            }
          </div>
      }
    </Box>
  );
}

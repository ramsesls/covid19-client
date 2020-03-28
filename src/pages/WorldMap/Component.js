import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Tooltip from 'react-tooltip';

import WorldMap from 'components/Maps/World';
import Settings from 'components/Maps/Settings';
import Loading from 'components/Loading';

import { useAPI } from 'api';
import { dataCorrection } from 'utils';

import useStyles from './styles';

export default function Map() {
  const [setting, setSetting] = useState('confirmed');
  const [tooltipContent, setTooltipContent] = useState('');
  const [covidData, isCovidDataLoading] = useAPI('/confirmed?level=countryRegion');
  const classes = useStyles();

  const handleSettingsChange = event => {
    setSetting(event.target.value);
  };

  return (
    <Paper className={classes.root}>
      {
        isCovidDataLoading
          ? <Loading />
          : (
            <div className="full-size">
              <Settings value={setting} onChange={handleSettingsChange} />
              <WorldMap covidData={dataCorrection(covidData)} setting={setting} setTooltipContent={setTooltipContent} />
              <Tooltip>{tooltipContent}</Tooltip>
            </div>
          )
      }
    </Paper>
  );
}

import React, { useState } from 'react';

import Tooltip from 'react-tooltip';

import Paper from '@material-ui/core/Paper';
import WorldMap from 'components/Maps/World';

import useStyles from './styles';

export default function Map({ data, criterion, by }) {
  const [tooltipContent, setTooltipContent] = useState('');
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <div className="full-size">
        <WorldMap
          covidData={data}
          setting={criterion}
          setTooltipContent={setTooltipContent}
          by={by}
        />
        <Tooltip>{tooltipContent}</Tooltip>
      </div>
    </Paper>
  );
}

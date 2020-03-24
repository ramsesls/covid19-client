import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PlusIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

import withErrorHandling from 'errorHandling';
import { WrongData as WrongDataFallback } from 'errorHandling/Fallbacks';

import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

import { ranges } from 'config';
import { isMobile } from 'utils';

import TooltipContent from './TooltipContent';

const useStyles = makeStyles(theme => ({
  controls: {
    position: 'absolute',
    'z-index': 1,
    top: 0,
    right: 0,
    width: 110,
    height: 60,
    display: 'flex',
    'align-items': 'center',
    'border-top-left-radius': 0,
    'border-bottom-right-radius': 0,

  },
  root: {
    position: 'relative',
    height: '100%',
  },
  icon: {
    'margin-left': 10,
  }
}));

const geoUrl = process.env.REACT_APP_GEO_WORLD_COUNTRIES;

const standardDistributionCriteria = ['confirmed', 'recovered', 'deaths', 'active'];

const getCountryValue = (country, setting, population) => {
  if (!country) return 0;

  if (standardDistributionCriteria.includes(setting)) {
    return country[setting];
  } else {
    return country[setting.split('_')[1]] / population * 10000000;
  }
}

const colorScale = number => {
  if (!number) return '#00ff00';

  const range = ranges.find(({ min, max }) => (number > min && number <= max));

  const { min, max, colorStart, colorEnd } = range;

  const currentScaleLinear = scaleLinear()
    .domain([min, max])
    .range([colorStart, colorEnd]);

  return currentScaleLinear(number);
}

const MapChart = ({ covidData, setting, setTooltipContent }) => {
  const [zoom, setZoom] = useState(2);
  const classes = useStyles();

  function handleZoomIn() {
    if (zoom >= 5) return;
    setZoom(zoom * 1.5);
  }

  function handleZoomOut() {
    if (zoom <= 1) return;
    setZoom(zoom / 1.5);
  }

  return (
    <div className={classes.root}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 60 }}
        data-tip=""
        className="full-size"
      >
        <ZoomableGroup center={[0, isMobile ? -45 : 25]} zoom={zoom}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const country = covidData.find(item => item.iso3 === geo.properties.ISO_A3);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(<TooltipContent data={country} additionName={!country && geo.properties.NAME} />);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={{
                      default: {
                        fill: colorScale(getCountryValue(country, setting, geo.properties.POP_EST)),
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Paper className={classes.controls}>
        <Fab color="primary" aria-label="plus" size="small" className={classes.icon} onClick={handleZoomIn}>
          <PlusIcon />
        </Fab>
        <Fab color="primary" aria-label="minus" size="small" className={classes.icon} onClick={handleZoomOut}>
          <MinusIcon />
        </Fab>
      </Paper>
    </div>
  );
};

export default withErrorHandling(MapChart, WrongDataFallback);

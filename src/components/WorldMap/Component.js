import React, { useState, useMemo } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PlusIcon from '@material-ui/icons/Add';
import MinusIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

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
  },
  icon: {
    'margin-left': 10,
  }
}));

const geoUrl = process.env.REACT_APP_GEO_WORLD_COUNTRIES;

const standardDistributionCriteria = ['confirmed', 'recovered', 'deaths', 'active'];

const getScale = (country, setting, population) => {
  if (!country) return 0;

  if (standardDistributionCriteria.includes(setting)) {
    return country[setting];
  } else {
    return country[setting.split('_')[1]] / population * 10000000;
  }
}

const getMax = setting => {
  switch(setting) {
    case 'confirmed':
      return 20000;
    case 'recovered':
      return 7000;
    case 'deaths':
      return 4000;
    case 'active':
      return 20000;
    default:
      return 3000;
  }
};
 
const MapChart = ({ covidData, setting, setTooltipContent }) => {
  const [zoom, setZoom] = useState(1.5);
  const classes = useStyles();

  const colorScale = useMemo(_ => scaleLinear()
    .domain([0, getMax(setting)])
    .range(["#4caf50", "#e53935"]),
  [setting]);

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
        <ZoomableGroup zoom={zoom}>
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
                        fill: colorScale(getScale(country, setting, geo.properties.POP_EST)),
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

export default MapChart;

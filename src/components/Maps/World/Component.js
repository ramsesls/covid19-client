import React, { useState } from 'react';

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

import Controls from 'components/Maps/Controls';
import TooltipContent from 'components/Maps/TooltipContent';

import useStyles from './styles';

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

const getMapStyles = color => ({
  default: {
    fill: color,
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
});

const WorldMapChart = ({ covidData, setting, setTooltipContent }) => {
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
                    style={getMapStyles(colorScale(getCountryValue(country, setting, geo.properties.POP_EST)))}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <Controls onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
    </div>
  );
};

export default withErrorHandling(WorldMapChart, WrongDataFallback);

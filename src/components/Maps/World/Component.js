import React, { useState } from 'react';

import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

import Controls from 'components/Maps/Controls';
import TooltipContent from 'components/Maps/TooltipContent';

import { isMobile } from 'utils';
import { colorRanges, geoUrls, standardDistributionCriteria } from 'config';

import useStyles from './styles';

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

  const range = colorRanges.find(({ min, max }) => (number > min && number <= max));

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

const WorldMapChart = ({ covidData, setting, setTooltipContent, by, className, center, scale }) => {
  const [_zoom, setZoom] = useState(2);
  const classes = useStyles();

  function handleZoomIn() {
    if (_zoom >= 5) return;
    setZoom(_zoom * 1.5);
  }

  function handleZoomOut() {
    if (_zoom <= 1) return;
    setZoom(_zoom / 1.5);
  }

  return (
    <div className={classes.root}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale }}
        data-tip=""
        className="full-size"
      >
        <ZoomableGroup center={center} zoom={_zoom}>
          <Geographies geography={geoUrls.world}>
            {({ geographies }) =>
              geographies.map((geo, i) => {
                const country = covidData.find(item => {
                  if (by === 'iso3') {
                    return item.iso3 === geo.properties.ISO_A3;
                  } else if (by === 'countryRegion') {
                    if (item.countryRegion === 'US') {
                      return geo.properties.NAME === 'United States of America';
                    } else {
                      return item.countryRegion === geo.properties.NAME;
                    }

                  } else return false;
                });

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

WorldMapChart.defaultProps = {
  by: 'iso3',
  scale: 60,
  center: [0, isMobile ? -45 : 25],
};

export default WorldMapChart;

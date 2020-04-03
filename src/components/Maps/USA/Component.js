import React, { useState, } from 'react';

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

const getValue = (data, setting, population) => {
  if (!data) return 0;

  if (standardDistributionCriteria.includes(setting)) {
    return data[setting];
  } else {
    return data[setting.split('_')[1]] / population * 10000000;
  }
}

const USAMap = ({ data, dividedInto, setting, setTooltipContent }) => {
  const [zoom, setZoom] = useState(1);
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
        projection="geoAlbersUsa"
        data-tip=""
        className="full-size"
      >
        <ZoomableGroup center={[-97, isMobile ? 30 : 40]} zoom={zoom}>
          <Geographies geography={geoUrls.usa[dividedInto]}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(item => (item.fips === geo.id) || (item.admin2 === geo.properties.name));

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(<TooltipContent data={current} additionName={!current && geo.properties.NAME} />);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent('');
                    }}
                    style={getMapStyles(colorScale(getValue(current, setting, geo.properties.POP_EST)))}
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

export default USAMap;

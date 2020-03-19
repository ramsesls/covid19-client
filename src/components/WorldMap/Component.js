import React, { useMemo } from "react";

import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

import TooltipContent from './TooltipContent';
import { combineSameCountries } from 'utils';

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
  const combinedData = useMemo(_ => combineSameCountries(covidData), [covidData]);
  const colorScale = useMemo(_ => scaleLinear()
    .domain([0, getMax(setting)])
    .range(["#4caf50", "#e53935"]),
  [setting]);

  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 60 }}
        data-tip=""
        className="full-size"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const country = combinedData.find(item => item.iso3 === geo.properties.ISO_A3);

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
    </>
  );
};

export default MapChart;

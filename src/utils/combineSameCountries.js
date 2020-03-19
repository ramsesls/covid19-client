const combineSameCountries = data => {
  return data.reduce((acc, item) => {
      const {active, confirmed, recovered, deaths} = item;

      if (item.countryRegion === 'China') {
        acc[0].active += active;
        acc[0].confirmed += confirmed;
        acc[0].recovered += recovered;
        acc[0].deaths += deaths;
      } else if (item.countryRegion === 'US') {
        acc[1].active += active;
        acc[1].confirmed += confirmed;
        acc[1].recovered += recovered;
        acc[1].deaths += deaths;
      } else if (item.countryRegion === 'Canada') {
        acc[2].active += active;
        acc[2].confirmed += confirmed;
        acc[2].recovered += recovered;
        acc[2].deaths += deaths;
      } else {
        acc.push(item)
      }

      return acc;
  }, [{
      provinceState: null,
      countryRegion: "China",
      lastUpdate: 1584612794000,
      lat: 30.9756403482891,
      long: 112.270692167452,
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      active: 0,
      admin2: null,
      fips: null,
      combinedKey: null,
      iso2: "CN",
      iso3: "CHN"
  }, {
      provinceState: null,
      countryRegion: "US",
      lastUpdate: 1584643383000,
      lat: 42.165726,
      long: -74.948051,
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      active: 0,
      admin2: null,
      fips: null,
      combinedKey: null,
      iso2: "US",
      iso3: "USA"
  }, {
      provinceState: null,
      countryRegion: "Canada",
      lastUpdate: 1584636184000,
      lat: 51.2538,
      long: -85.3232,
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      active: 0,
      admin2: null,
      fips: null,
      combinedKey: null,
      iso2: "CA",
      iso3: "CAN"
}]);
};

export default combineSameCountries;

const defaultCountryData = {
  provinceState: null,
  countryRegion: '',
  lastUpdate: 0,
  lat: 0,
  long: 0,
  confirmed: 0,
  recovered: 0,
  deaths: 0,
  active: 0,
  admin2: null,
  fips: null,
  combinedKey: null,
  iso2: '',
  iso3: '',
};

const combineSameCountries = data => {
  const countries = data.reduce((acc, item) => {

    if (item.countryRegion === 'United Kingdom' || item.countryRegion === 'France') {
      return acc;
    }

    const count = acc[item.countryRegion];

    count
      ? (acc[item.countryRegion] = count + 1)
      : acc[item.countryRegion] = 1;

    return acc;
  }, {});

  const countriesWithRegions = Object.entries(countries).filter(([name, count]) => count > 1).map(([name]) => name);

  const combined = data.reduce((acc, item) => {
    if (countriesWithRegions.includes(item.countryRegion)) {
      let currentCountry = acc[item.countryRegion];
      const {
        countryRegion,
        lastUpdate,
        lat,
        long,
        confirmed,
        recovered,
        deaths,
        active,
        admin2,
        fips,
        combinedKey,
        iso2,
        iso3,
      } = item;

      if (!currentCountry) {
        currentCountry = (acc[item.countryRegion] = {
          ...defaultCountryData,
          countryRegion,
          admin2,
          fips,
          combinedKey,
          iso2,
          iso3,
          lat,
          long,
        });
      }


      currentCountry.active += active;
      currentCountry.confirmed += confirmed;
      currentCountry.recovered += recovered;
      currentCountry.deaths += deaths;

      if (lastUpdate > currentCountry.lastUpdate) {
        currentCountry.lastUpdate = lastUpdate;
      }
    }

    return acc;
  }, {});

  return [...data, ...Object.values(combined)].sort((a, b) => b.confirmed - a.confirmed);
};

export default combineSameCountries;

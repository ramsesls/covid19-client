import { useState, useEffect } from 'react';
import { combineSameCountries } from 'utils';

export default function useAPI(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(_ => {
    const fetchData = async _ => {
      fetch(`${process.env.REACT_APP_API_URI}${url}`).then(res => res.json()).then(data => {
        setData(url === '/confirmed' ? combineSameCountries(data) : data);
        setIsLoading(false);
      }).catch(err => setError(err));
    };

    fetchData();
  }, [setData, setIsLoading, url]);

  return [data, isLoading, error];
}

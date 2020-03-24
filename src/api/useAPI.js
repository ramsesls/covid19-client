import { useState, useEffect, useRef } from 'react';

export default function useAPI(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const isUnMounted = useRef(false);

  useEffect(_ => {
    const fetchData = async _ => {
      fetch(`${process.env.REACT_APP_API_URI}${url}`).then(res => res.json()).then(data => {
        if (!isUnMounted.current) {
          setState({
            data,
            isLoading: false,
            error: null,
          });
        }
      }).catch(err => setState(state => ({ ...state, error: err })));
    };

    fetchData();

    return _ => (isUnMounted.current = true);
  }, [setState, url]);

  const { data, isLoading, error } = state;

  return [data, isLoading, error];
}

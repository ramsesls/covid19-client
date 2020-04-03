import { useState, useEffect } from 'react';

import { makeCancelable } from 'utils';

export default function useAPI(url, fake) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(_ => {
    if (!fake) {
      setState(state => ({ ...state, isLoading: true }));
      const cancelable = makeCancelable(fetch(`${process.env.REACT_APP_API_URI}${url}`).then(res => res.json()));

      cancelable.then(data => {
        setState({
          data,
          isLoading: false,
          error: null,
        });
      }).catch(err => setState(state => ({ ...state, error: err })));

      return _ => cancelable.cancel();
    }
  }, [setState, url, fake]);

  const { data, isLoading, error } = state;

  return [data, fake ? false : isLoading, error];
}

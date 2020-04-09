import React, { useContext, useEffect, useCallback } from 'react';
import { CovidContext } from './Context';

const url = 'https://pomber.github.io/covid19/timeseries.json';

const Loader = () => {
  const { dispatch } = useContext(CovidContext);

  const load = useCallback(() => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
      const json = JSON.parse(xhr.responseText);

      dispatch({
        type: 'set_countries',
        payload: Object.keys(json),
      });

      dispatch({
        type: 'set_data',
        payload: json,
      });

      dispatch({
        type: 'set_country',
        payload: 'Spain',
      });

      dispatch({
        type: 'set_is_loading',
        payload: false,
      });
    });

    xhr.open('GET', url);
    xhr.send();
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="Current-container">
      <span className="Loading">
        Loading ...
      </span>
    </div>
  );
};

export default Loader;

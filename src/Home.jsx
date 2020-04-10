import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga';
import { CovidContext } from './Context';
import Loader from './Loader';
import Current from './Current';
import Today from './Today';
import Delta from './Delta';
import Countries from './Countries';

const Home = () => {
  const { state } = useContext(CovidContext);

  useEffect(() => {
    ReactGA.initialize('UA-131741741-2');
    ReactGA.pageview('/');
  }, []);

  return (
    <div className={state.isBetter ? 'isBetter' : 'isNotBetter'}>
      <Countries />
      <Today />
      {state.isLoading && (
        <Loader />
      )}
      {!state.isLoading && <Delta />}
      {!state.isLoading && <Current />}
      <span className="Legend-Container Corner-Bottom-Left">
        *Covid-19 will stop spreading when the rate reaches 1.0
      </span>
    </div>
  );
};

export default Home;

import React, { useContext } from 'react';
import { CovidContext } from './Context';
import { CalculateFactor } from './Calculator';
import Evolution from './Evolution';

const Current = () => {
  const { state } = useContext(CovidContext);

  const calculateFactor = () => {
    let factor = -1;

    if (state.data && state.country) {
      const data = state.data[state.country];

      factor = CalculateFactor(data, data.length, state.days);

      // setIsValid(!isNaN(factor));
    }

    return factor;
  };

  const factor = calculateFactor();

  return (
    <div className="Current-container">
      {isFinite(factor) && (
        <div className="Title">
          Covid-19 death multiplication rate*
          <br/>
          every 4 days at
          {' '}
          {state.country}
          {' '}
          today is
        </div>
      )}
      {!isFinite(factor) && (
        <div className="Title">
          There is not enough data to calculate
          <br/>
          the Covid-19 death multiplication rate*
          <br/>
          every 4 days for
          {' '}
          {state.country}
        </div>
      )}
      <br/>
      <span className="Current-number">
        {isFinite(factor) && factor.toFixed(2)}
      </span>
      {!state.isLoading && <Evolution />}
    </div>
  );
};

export default Current;

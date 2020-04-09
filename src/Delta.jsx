import React, { useContext, useState, useEffect, useCallback } from 'react';
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi';
import { CovidContext } from './Context';
import { CalculateFactor } from './Calculator';

const Delta = () => {
  const { state, dispatch } = useContext(CovidContext);

  const [delta, setDelta] = useState(0);
  const [isBetter, setIsBetter] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const calculateDelta = useCallback(() => {
    if (state.data && state.country) {
      const data = state.data[state.country];

      const factorToday = CalculateFactor(data, data.length, state.days);
      const factorYesterday = CalculateFactor(data, data.length-1, state.days);

      setDelta(factorToday - factorYesterday);

      setIsValid(!isNaN(factorToday) && !isNaN(factorYesterday));
    }
  }, [state.country, state.data, state.days]);

  useEffect(() => {
    calculateDelta();
    setIsBetter(delta <= 0);
    dispatch({
      type: 'set_is_better',
      payload: isBetter,
    });
  }, [calculateDelta, isBetter, setIsBetter, delta, dispatch]);

  return (
    <div className="Delta-container Corner-Top-Right">
      {isValid && (
        <div>
          {isBetter && <FiArrowDownRight className="Delta-icon" />}
          {!isBetter && <FiArrowUpRight className="Delta-icon" />}

          <span className="Delta-percentage">{Math.abs(delta.toFixed(2))}</span>
          <span className="Delta-legend">
            {' '}
            {isBetter ? 'less' : 'more'}
            {' '}
            than yesterday
          </span>
        </div>
      )}
    </div>
  );
};

export default Delta;

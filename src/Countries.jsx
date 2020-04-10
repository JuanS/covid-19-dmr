import React, { useContext } from 'react';
import { CovidContext } from './Context';

const Countries = (props) => {
  const { state, dispatch } = useContext(CovidContext);

  const handleChange = (event) => {
    dispatch({
      type: 'set_country',
      payload: event.target.value,
    });
  };

  const optionItems = state.countries.map((country) => {
    return (
      <option key={country} className="select-item">{country}</option>
    );
  });

  return (
    <div className="Countries-container Corner-Top-Left">
      {!state.isLoading && (
        <div className="select">
          <select value={state.country} onChange={handleChange}>
            {optionItems}
          </select>
        </div>
      )}
    </div>
  );
};

export default Countries;

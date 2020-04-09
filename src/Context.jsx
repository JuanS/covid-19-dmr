import React, { useReducer } from 'react';

const initialState = {
  days: 4,
  evolutionDays: 15,
  data: undefined,
  countries: [],
  country: undefined,
  isBetter: true,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_is_loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'set_data':
      return {
        ...state,
        data: action.payload,
      };
    case 'set_countries':
      return {
        ...state,
        countries: action.payload,
      };
    case 'set_country':
      return {
        ...state,
        country: action.payload,
      };
    case 'set_is_better':
      return {
        ...state,
        isBetter: action.payload,
      };
    default:
      return state;
  }
};

const CovidContext = React.createContext(initialState);

function CovidProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CovidContext.Provider value={{ state, dispatch }}>
      {children}
    </CovidContext.Provider>
  );
}

export { CovidContext, CovidProvider };

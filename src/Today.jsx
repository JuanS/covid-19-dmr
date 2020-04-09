import React from 'react';
import Moment from 'react-moment';

const Today = ({ data_orig }) => {

  return (
    <div className="Today-container Corner-Top-Right">
      <Moment className="Today-date" format="dddd, D MMMM">{Date.now()}</Moment>
    </div>
  );
};

export default Today;
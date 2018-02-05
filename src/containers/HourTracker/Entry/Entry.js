import React from 'react';
import PropTypes from 'prop-types';

const HourEntry = ({ entry }) => {
 return (
   <div>
     Entry
    </div>
 );
}

HourEntry.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default HourEntry;
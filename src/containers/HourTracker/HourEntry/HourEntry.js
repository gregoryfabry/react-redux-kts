import React from 'react';
import PropTypes from 'prop-types';

const HourEntry = ({ title, hours, onHoursEdit, onTitleEdit }) => {
 return (
   <div className="entry">
     Entry
    </div>
 );
}

HourEntry.propTypes = {
  title: PropTypes.string.isRequired,
  hours: PropTypes.number.isRequired,
  onHoursEdit: PropTypes.func.isRequired,
  onTitleEdit: PropTypes.func.isRequired,
};

export default HourEntry;
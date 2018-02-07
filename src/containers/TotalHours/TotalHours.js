import React from 'react';
import { connect } from 'react-redux';

class TotalHours extends React.Component {
  constructor(props) {
    super(props);
    this.generateTotalHours(props.entries);
  }

  componentWillReceiveProps(nextProps) {
    this.generateTotalHours(nextProps.entries);
  }

  generateTotalHours(entries) {
    this.totalHours = entries.reduce((acc, cur) => acc + cur.hours, 0);
  }

  render() {
    return (
      <div>
        Total Hours: {this.totalHours}
      </div>
    );
  }
}

const connectStateToProps = (state) => {
  return {
    entries: state.hourTrackerReducer.entries,
  };
};

export default connect(connectStateToProps, undefined)(TotalHours);

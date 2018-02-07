import React from 'react';
import { connect } from 'react-redux'; //eslint-disable-line
import { addEntry, updateEntryTitle, updateEntryHours } from '../../redux/actions/HourTrackerActions'; //eslint-disable-line
import Entry from './HourEntry/HourEntry';

class HourTracker extends React.Component {
  onTitleEdit = (ev, id) => {
    this.props.updateEntryTitle(id, ev.target.value);
  }

  onHoursEdit = (ev, id) => {
    this.props.updateEntryHours(id, parseInt(ev.target.value, 10));
  }

  render() {
    return (
      <div>
        <div>
          {
            this.props.entries.map((entry) => {
              return (
                <Entry
                  key={entry.id}
                  title={entry.title}
                  hours={entry.hours}
                  onTitleEdit={(ev) => { this.onTitleEdit(ev, entry.id); }}
                  onHoursEdit={(ev) => { this.onHoursEdit(ev, entry.id); }}
                />
              );
            })
          }
        </div>
        <div>
          <button onClick={this.props.addEntry}>Add</button>
        </div>
      </div>
    );
  }
}

// export default HourTracker;

const mapStateToProps = (state) => {
  return {
    entries: state.hourTrackerReducer.entries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEntry: () => {
      dispatch(addEntry());
    },
    updateEntryTitle: (id, title) => {
      dispatch(updateEntryTitle(id, title));
    },
    updateEntryHours: (id, hours) => {
      dispatch(updateEntryHours(id, hours));
    },
  }
}

export { HourTracker as HourTrackerComponent };
export default connect(mapStateToProps, mapDispatchToProps)(HourTracker);

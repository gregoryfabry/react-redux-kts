import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux'; //eslint-disable-line
import { addEntry, updateEntryTitle, updateEntryHours } from '../../redux/actions/HourTrackerActions'; //eslint-disable-line
import Entry from './HourEntry/HourEntry';

class HourTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: uuid(),
          hours: 1,
          title: 'Grab Coffee',
        },
        {
          id: uuid(),
          hours: 2,
          title: 'Read Reddit',
        },
        {
          id: uuid(),
          hours: 1,
          title: 'Attend KTS',
        },
      ],
    }
  }

  onTitleEdit = (ev, id) => {
    const newEntries = this.state.entries.map((entry) => {
      if (entry.id === id) {
        return Object.assign({}, entry, {
          title: ev.target.value,
        });
      }
      return entry;
    });
    this.setState({
      entries: newEntries,
    });
  }

  onHoursEdit = (ev, id) => {
    const newEntries = this.state.entries.map((entry) => {
      if (entry.id === id) {
        return Object.assign({}, entry, {
          hours: parseInt(ev.target.value, 10),
        });
      }
      return entry;
    });
    this.setState({
      entries: newEntries,
    });
  }

  onAddEntry = () => {
    const existingEntries = this.state.entries.slice();
    existingEntries.push({
      id: uuid(),
      title: '',
      hours: 0,
    });
    this.setState({
      entries: existingEntries,
    });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.entries.map((entry) => {
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
          <button onClick={this.onAddEntry}>Add</button>
        </div>
      </div>
    );
  }
}

export default HourTracker;

// const mapStateToProps = (state) => {
//   return {
//     entries: state.hourTrackerReducer.entries,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addEntry: () => {
//       dispatch(addEntry());
//     },
//     updateEntryTitle: (id, title) => {
//       dispatch(updateEntryTitle(id, title));
//     },
//     updateEntryHours: (id, hours) => {
//       dispatch(updateEntryHours(id, hours));
//     },
//   }
// }
//
// export { HourTracker as HourTrackerComponent };
// export default connect(mapStateToProps, mapDispatchToProps)(HourTracker);

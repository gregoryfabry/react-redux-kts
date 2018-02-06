import React from 'react';
import uuid from 'uuid';
import Entry from './HourEntry/HourEntry';

class HourTracker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: '1',
          hours: 1,
          title: 'Grab Coffee',
        },
        {
          id: '2',
          hours: 2,
          title: 'Read Reddit',
        },
        {
          id: '3',
          hours: 1,
          title: 'Attend KTS',
        },
      ],
    }
  }

  onTitleEdit = (ev, id) => {
    const existingEntryIndex = this.state.entries.findIndex((entry) => {
      return entry.id === id;
    });
    const newEntries = this.state.entries.slice();
    newEntries[existingEntryIndex].title = ev.target.value;
    this.setState({
      entries: newEntries,
    });
  }

  onHoursEdit = (ev, id) => {
    const existingEntryIndex = this.state.entries.findIndex((entry) => {
      return entry.id === id;
    });
    const newEntries = this.state.entries.slice();
    newEntries[existingEntryIndex].hours = parseInt(ev.target.value);
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

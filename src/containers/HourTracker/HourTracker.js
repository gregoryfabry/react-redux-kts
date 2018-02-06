import React from 'react';
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
    /* fill in */
  }

  onHoursEdit = (ev, id) => {
    /* fill in */
  }

  render() {
    return (
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
    );
  }
}

export default HourTracker;

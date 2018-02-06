import React from 'react';
import Entry from './HourEntry/HourEntry';

class HourTracker extends React.Component {

  onTitleEdit = (ev) => {
    /* fill in */
  }

  onHoursEdit = (ev) => {
    /* fill in */
  }
  render() {
    const entries = [
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
    ];
    return (
      <div>
        {
          entries.map((entry) => {
            return (
              <Entry
                key={entry.id}
                title={entry.title}
                hours={entry.hours}
                onTitleEdit={this.onTitleEdit}
                onHoursEdit={this.onHoursEdit}
              />
            );
          })
        }
      </div>
    );
  }
}

export default HourTracker;

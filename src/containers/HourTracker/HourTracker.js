import React from 'react';
import Entry from './Entry/Entry';

class HourTracker extends React.Component {
  render() {
    const entries = [
      {
        id: '1',
        hours: 1,
        name: 'Grab Coffee'
      },
      {
        id: '2',
        hours: 2,
        name: 'Read Reddit'
      },
      {
        id: '3',
        hours: 1,
        name: 'Attend KTS'
      },
    ]
    return (
      <div>
        {
          entries.map((entry) => {
            return (
              <Entry key={entry.id} entry={entry} />
            );
          })
        }
      </div>
    );
  }
}

export default HourTracker;

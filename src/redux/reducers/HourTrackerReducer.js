import * as hourTrackerActions from '../actions/HourTrackerActions';

export const initialState = {
  entries: [
    {
      id: '1',
      hours: 0,
      title: 'Grab Coffee',
    },
    {
      id: '2',
      hours: 0,
      title: 'Read Reddit',
    },
    {
      id: '3',
      hours: 0,
      title: 'Attend KTS',
    },
  ],
  nextId: 4,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case hourTrackerActions.ADD_ENTRY: {
      return Object.assign({}, state, {
        entries: state.entries.concat({ id: state.nextId.toString(), hours: 0, title: '' }),
        nextId: state.nextId + 1,
      });
    }

    case hourTrackerActions.UPDATE_ENTRY_TITLE: {
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            return Object.assign({}, entry, {
              title: action.payload.title,
            });
          }

          return entry;
        })
      })
    }

    case hourTrackerActions.UPDATE_ENTRY_HOURS: {
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            /* TODO: fill in for Objective 3 */
          }

          return entry;
        })
      })
    }

    case hourTrackerActions.FETCH_ENTRIES_SUCCESS: {
      return Object.assign({}, state, {
        entries: action.payload,
      });
    }

    default: {
      return state;
    }
  }
};

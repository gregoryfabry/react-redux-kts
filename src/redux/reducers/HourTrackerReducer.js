import * as hourTrackerActions from '../actions/HourTrackerActions';

export const initialState = {
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

    case hourTrackerActions.UPDATE_ENTRY: {
      return Object.assign({}, state, {
        entries: state.entries.map((entry) => {
          if (entry.id === action.payload.id) {
            // TODO: finish this branch
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

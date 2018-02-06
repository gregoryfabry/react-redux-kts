import * as hourTrackerActions from '../actions/HourTrackerActions';

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {

    case hourTrackerActions.ADD_ENTRY : {
      /* fill in */
      return state;
    }
    default: {
      return state;
    }
  }
};

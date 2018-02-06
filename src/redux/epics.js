import { combineEpics } from 'redux-observable';
import * as hourTrackerEpics from './epics/HourTrackerEpics';

const rootEpic = (...args) => {
  return combineEpics(
    hourTrackerEpics.fetchEntries,
  )(...args);
};

export default rootEpic;

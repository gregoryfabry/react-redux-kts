import { combineReducers } from 'redux';
import hourTrackerReducer from './reducers/HourTrackerReducer';

const rootReducer = combineReducers({ hourTrackerReducer });

export default rootReducer;

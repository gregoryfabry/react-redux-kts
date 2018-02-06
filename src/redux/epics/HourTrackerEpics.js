import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import * as hourTrackerActions from '../actions/HourTrackerActions';
import entries from './entries';

export const fetchEntries = (action$, store) => {
  return action$.ofType(hourTrackerActions.FETCH_ENTRIES)
    .switchMap((action) => {
      return Observable.of(hourTrackerActions.fetchEntriesSuccess(entries));
    });
};
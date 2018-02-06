export const ADD_ENTRY = 'ADD_ENTRY';

export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';

export const fetchPermissions = (entry) => {
  return { type: ADD_ENTRY, payload: {/* fill in*/}};
};

export const fetchEntries = () => {
  return { type: FETCH_ENTRIES };
}

export const fetchEntriesSuccess = (entries) => {
  return { type: FETCH_ENTRIES_SUCCESS, payload: entries };
}
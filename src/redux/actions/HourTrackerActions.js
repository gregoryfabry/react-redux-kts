export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';

export const FETCH_ENTRIES = 'FETCH_ENTRIES';
export const FETCH_ENTRIES_SUCCESS = 'FETCH_ENTRIES_SUCCESS';

export const addEntry = () => {
  return { type: ADD_ENTRY };
};

export const updateEntry = (id, title, hours) => {
  return {
    type: UPDATE_ENTRY,
    payload: { id, title, hours },
  };
};

export const fetchEntries = () => {
  return { type: FETCH_ENTRIES };
}

export const fetchEntriesSuccess = (entries) => {
  return { type: FETCH_ENTRIES_SUCCESS, payload: entries };
}

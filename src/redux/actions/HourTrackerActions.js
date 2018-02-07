export const ADD_ENTRY = 'ADD_ENTRY';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';

export const addEntry = () => {
  return { type: ADD_ENTRY };
};

export const updateEntry = (id, title, hours) => {
  return {
    type: UPDATE_ENTRY,
    payload: { id, title, hours },
  };
};

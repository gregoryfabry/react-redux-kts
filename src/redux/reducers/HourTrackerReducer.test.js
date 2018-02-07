import React from 'react';
import { addEntry, updateEntry, fetchEntriesSuccess } from '../actions/HourTrackerActions';
import reducer, { initialState as reducerInitialState } from './HourTrackerReducer';

describe('HourTrackerReducer', () => {
  const initialState = {
    entries: [
      { id: '1', title: 'entry 1', hours: 5 },
      { id: '2', title: 'entry 2', hours: 7 },
    ],
    nextId: 3,
  };

  it('returns default state if no actions match', () => {
    const action = {};
    const finalState = reducer(initialState, action);
    expect(finalState).toEqual(initialState);
  });

  it('returns initial state if state is undefined', () => {
    const action = {};
    const finalState = reducer(undefined, action);
    expect(finalState).toEqual(reducerInitialState);
  });

  it('adds a new entry', () => {
    const action = addEntry();
    const finalState = reducer(initialState, action);
    expect(finalState).toEqual({
      entries: [
        { id: '1', title: 'entry 1', hours: 5 },
        { id: '2', title: 'entry 2', hours: 7 },
        { id: '3', title: '', hours: 0 },
      ],
      nextId: 4,
    });
  });

  it('updates an entry', () => {
    const action = updateEntry('1', 'new entry 1', 27);
    const finalState = reducer(initialState, action);
    expect(finalState).toEqual({
      entries: [
        { id: '1', title: 'new entry 1', hours: 27 },
        { id: '2', title: 'entry 2', hours: 7 },
      ],
      nextId: 3,
    });
  });

  it('updates with fetched entries', () => {
    const action = fetchEntriesSuccess([
      { id: '5', title: 'I came from a server!', hours: 4 },
    ]);
    const finalState = reducer(initialState, action);
    expect(finalState).toEqual({
      entries: [
        { id: '5', title: 'I came from a server!', hours: 4 },
      ],
      nextId: 3,
    });
  });
});

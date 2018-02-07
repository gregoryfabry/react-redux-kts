import React from 'react';
import { shallow, mount } from 'enzyme';
import { HourTrackerComponent } from './HourTracker';

describe('HourTracker', () => {
  let wrapper, addEntry, updateEntryTitle, updateEntryHours;
  const entries = [
    {
      id: '1',
      title: 'example entry',
      hours: 27,
    },
    {
      id: '3',
      title: 'example entry',
      hours: 27,
    },
  ];

  beforeEach(() => {
    addEntry = jest.fn();
    updateEntryTitle = jest.fn();
    updateEntryHours = jest.fn();
    wrapper = shallow((
      <HourTrackerComponent
        addEntry={addEntry}
        updateEntryTitle={updateEntryTitle}
        updateEntryHours={updateEntryHours}
        entries={entries}
      />
    ));
  })

  it('renders all entries', () =>{
    expect(wrapper.find('HourEntry').length).toEqual(2);
  });

  it('adds a new entry', () => {
    wrapper.find('button').simulate('click');
    expect(addEntry).toHaveBeenCalled();
  });

  it('updates title', () => {
    const event = {
      target: {
        value: 'new-title',
      }
    }
    wrapper.find('HourEntry').first().props().onTitleEdit(event);
    expect(updateEntryTitle).toHaveBeenCalledWith('1', 'new-title');
  });

  it('updates hours', () => {
    const event = {
      target: {
        value: '10',
      }
    }
    wrapper.find('HourEntry').first().props().onHoursEdit(event);
    expect(updateEntryHours).toHaveBeenCalledWith('1', 10);
  });
});

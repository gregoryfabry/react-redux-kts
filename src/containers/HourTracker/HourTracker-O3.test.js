import React from 'react';
import { shallow, mount } from 'enzyme';
import { HourTrackerComponent } from './HourTracker';

describe('HourTracker', () => {
  let wrapper, addEntry, updateEntry;
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
    updateEntry = jest.fn();
    wrapper = shallow((
      <HourTrackerComponent
        addEntry={addEntry}
        updateEntry={updateEntry}
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
    expect(updateEntry).toHaveBeenCalledWith('1', 'new-title', 27);
  });

  it('updates hours', () => {
    const event = {
      target: {
        value: '10',
      }
    }
    wrapper.find('HourEntry').first().props().onTitleEdit(event);
    expect(updateEntry).toHaveBeenCalledWith('1', 'example entry', '10');
  });
});

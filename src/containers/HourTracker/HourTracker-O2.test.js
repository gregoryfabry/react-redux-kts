import React from 'react';
import { shallow, mount } from 'enzyme';
import HourTracker from './HourTracker';

describe('HourTracker', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HourTracker />);
  })
  it('adds a new entry', () => {
    const instance = wrapper.instance();
    const currentLength = instance.state.entries.length;
    wrapper.find('button').simulate('click');
    expect(instance.state.entries.length).toEqual(currentLength + 1);
  });

  it('updates title', () => {
    const instance = wrapper.instance();
    const currentLength = instance.state.entries.length;
    const event = {
      target: {
        value: 'new-title',
      }
    }
    wrapper.find('HourEntry').first().props().onTitleEdit(event);
    expect(instance.state.entries[0].title).toEqual(event.target.value);
  });

  it('updates hours', () => {
    const instance = wrapper.instance();
    const currentLength = instance.state.entries.length;
    const event = {
      target: {
        value: '10',
      }
    }
    wrapper.find('HourEntry').first().props().onHoursEdit(event);
    expect(instance.state.entries[0].hours).toEqual(parseInt(event.target.value));
  });
});
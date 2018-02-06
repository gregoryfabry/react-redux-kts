import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HourEntry from './HourEntry';

Enzyme.configure({ adapter: new Adapter() });

describe('HourEntry', () => {
  let title;
  let hours;
  let onTitleEdit;
  let onHoursEdit;
  let wrapper;

  beforeEach(() => {
    title = 'test title';
    hours = 1;
    onTitleEdit = jest.fn();
    onHoursEdit = jest.fn();
    wrapper = shallow(<HourEntry title={title} hours={hours} onTitleEdit={onTitleEdit} onHoursEdit={onHoursEdit} />);
  });

  it('updates title', () => {
    const event = {
      value: 'new title',
    };
    wrapper.find('.id-title-input').simulate('change', event)
    expect(onTitleEdit).toHaveBeenCalledWith(event);
  });

  it('updates hours', () => {
    const event = {
      value: 2,
    };
    wrapper.find('.id-hours-input').simulate('change', event)
    expect(onHoursEdit).toHaveBeenCalledWith(event);
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import { EventListItem } from '../../../components/Event/EventListItem';
import events from '../../fixtures/events';

test('Should render eventlistitem correctly', () => {
  const wrapper = shallow(<EventListItem {...events[0]} />);
  expect(wrapper).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import { EventsPage } from '../../../components/Event/EventsPage';

import events from '../../fixtures/events';

test('should render eventspage with events', () => {
  const wrapper = shallow(<EventsPage events={events} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render eventspage without events', () => {
  const wrapper = shallow(<EventsPage events={[]} />);
  expect(wrapper).toMatchSnapshot();
});

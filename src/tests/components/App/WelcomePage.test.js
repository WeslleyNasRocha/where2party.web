import React from 'react';
import { shallow } from 'enzyme';

import { WelcomePage } from '../../../components/App/WelcomePage';

test('should render WelcomePage correctly', () => {
  const wrapper = shallow(<WelcomePage />);

  expect(wrapper).toMatchSnapshot();
});

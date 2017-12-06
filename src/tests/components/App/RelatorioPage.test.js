import React from 'react';
import { shallow } from 'enzyme';

import { RelatorioPage } from '../../../components/App/RelatorioPage';

test('should render RelatorioPage correctly', () => {
  const wrapper = shallow(<RelatorioPage />);

  expect(wrapper).toMatchSnapshot();
});

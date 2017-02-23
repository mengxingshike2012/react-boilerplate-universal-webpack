import test from 'ava';
import React from 'react'
import { shallow } from 'enzyme';

import Map from '../map'


test((t) => {
  const renderedComponent = shallow(<div />);
  t.deepEqual(renderedComponent.type(), 'div')
})


test((t) => {
  const renderedComponent = shallow(<Map sdkKey="" />);
  t.deepEqual(renderedComponent.type(), 'div')
})

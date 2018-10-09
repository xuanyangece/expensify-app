import React from 'react';
import { shallow } from 'enzyme';
import LoginPage, { Loginpage } from '../../components/LoginPage';

test('should correctly render Loginpage', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshop()
})
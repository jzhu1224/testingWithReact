import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAtrr } from '../../../utils/index';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

   it('It should render without errors', () => {
       const wrapper = findByTestAtrr(component,'header-component');
       expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
       const logo = component.find(`[data-test='logo-img']`);
       expect(logo.length).toBe(1);
    })
});


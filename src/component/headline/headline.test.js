import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAtrr, checkProps } from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        it('Should not trow a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr:[{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            }
            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });


    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp({
                header: 'Test Header',
                desc: 'Test Desc'
            });

        });
        
        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })

    });

    describe('Have No props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    });
});
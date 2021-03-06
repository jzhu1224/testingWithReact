import React from 'react';
import { findByTestAtrr,checkProps } from './../../../utils';
import SharedButton from '.';
import { shallow } from 'enzyme';


describe('ShareButton Component',() => {

    describe('Checking Proptypes',() => {
        it('Should NOT throw a warning',() => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };

            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders',() => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props} />);
        });
        it('Should Render a button',() => {
            const button = findByTestAtrr(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });
    });

});
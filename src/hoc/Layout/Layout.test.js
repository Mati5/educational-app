import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';
import { Footer } from '../../components/Footer/index';
import { Toolbar } from '../../components/Navigation/Toolbar/index';

describe("<Layout />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Layout />);
    });

    it("Should render default site layout with toolbar, footer", () => {
        expect(wrapper.find(Footer)).toHaveLength(1);
        expect(wrapper.find(Toolbar)).toHaveLength(1);
    });
});
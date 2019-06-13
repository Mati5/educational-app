import React from 'react';
import { shallow } from 'enzyme';
import styled from 'styled-components';

import Lesson from './index';
import { Icon } from './Icon';
import { Header } from './Header';
import { Button } from '../UI/Button/Button';
import { H3 } from '../Headers/index';
import { LessonLink } from './Link';

describe("<Lesson />", () => {
    let wrapper;
    let props;

    beforeEach(() => {
        wrapper = shallow(<Lesson />);

        props = {
            id: 112233,
            title: "example"
        }
    });

    it('Should render lesson element', () => {
        wrapper.setProps(props);

        expect(wrapper.find(Icon)).toHaveLength(1);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Button).prop('buttonColor')).toEqual('#07a9e4');
        expect(wrapper.find(H3)).toHaveLength(1);
        expect(wrapper.find(H3).prop('width')).toEqual('70%');

        expect(wrapper.find(H3).text()).toEqual('example');
        expect(wrapper.find(LessonLink).prop('to')).toEqual({"pathname": "/lessons/example", "search": "?id=112233"});
        expect(wrapper.find(LessonLink).text()).toEqual('example');
    });
});
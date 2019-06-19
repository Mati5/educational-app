import React from 'react';
import { shallow } from 'enzyme';

import { Lessons}  from './Lessons';
import { Rectangle } from '../../components/Rectangle/index';
import { Icon } from '../../components/Rectangle/Icon';
import { Header } from '../../components/Rectangle/Header';
import { Button } from '../../components/UI/Button/Button';
import { H3 } from '../../components/Headers/index';
import { LessonLink } from '../../components/Rectangle/Link';

describe("<Lessons />", () => {
    let lessonList;
    let wrapper; 

    beforeEach(() => {
        lessonList = [
            {
              content: "example content",
              title: "title1",
              id: "-Lgx290EBO-rjCud3nQ6"
            }
        ];
    })

    it("Should render single lesson element", () => {
        wrapper = shallow(<Lessons lessons={lessonList} />);

        expect(wrapper.find(Rectangle)).toHaveLength(1);

        expect(wrapper.find(Icon)).toHaveLength(1);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Button).prop('buttonColor')).toEqual('#07a9e4');
        expect(wrapper.find(H3)).toHaveLength(1);
        expect(wrapper.find(H3).prop('width')).toEqual('70%');

        expect(wrapper.find(H3).text()).toEqual('title1');
        expect(wrapper.find(LessonLink).prop('to')).toEqual({"pathname": "/lessons/title1", "search": "?id=-Lgx290EBO-rjCud3nQ6"});
        expect(wrapper.find(LessonLink).text()).toEqual('title1');
    });

    it("Should show spinner when loading", () => {
        wrapper = shallow(<Lessons loading={true} />);

        expect(wrapper.find('p').text()).toEqual("Loading...");
    });
});
import React from 'react';
import { shallow } from 'enzyme';

import { Lessons}  from './Lessons';
import { HeaderSection } from '../../components/Headers/HeaderSection';
import Lesson from '../../components/Lesson/index';

describe("<Lessons />", () => {
    let lessonList;
    let wrapper; 

    beforeEach(() => {
        lessonList = [
            {
              content: "example content",
              title: "title1",
              id: "-Lgx290EBO-rjCud3nQ6"
            },
            {
              content: "terds",
              title: "title2",
              id: "-Lgx2CfdyXYFruLCktyD"
            }
        ];
    })

    it("Should render two lesson element", () => {
        wrapper = shallow(<Lessons lessons={lessonList} />);

        expect(wrapper.find(Lesson)).toHaveLength(2);
    });

    it("Should show spinner when loading", () => {
        wrapper = shallow(<Lessons loading={true} />);

        expect(wrapper.find('p').text()).toEqual("Loading...");
    });
});
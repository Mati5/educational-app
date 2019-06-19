import React from 'react';
import { shallow } from 'enzyme';

import { SingleLesson } from './SingleLesson';
import  LessonList  from './LessonList';
import { Lesson } from '../../components/Lesson/index';
import { ToggleButton } from '../../components/Navigation/ToggleButton/index';
import LinearProgress from '@material-ui/core/LinearProgress';

describe("<Lessons />", () => {
    let lessonList;
    let wrapper; 
    let singleLesson;

    beforeEach(() => {
        singleLesson = {
            title: "example",
            conent: "text"
        }
    });
    
    it("Should render single lesson", () => {
        wrapper = shallow(<SingleLesson />);
        expect(wrapper.find(LessonList)).toHaveLength(1);
        expect(wrapper.find(Lesson)).toHaveLength(1);
        expect(wrapper.find(ToggleButton)).toHaveLength(1);
    });

    it("Should show spinner when loading", () => {
        wrapper = shallow(<SingleLesson loading={true} />);

        expect(wrapper.find(LinearProgress)).toHaveLength(1);
    });
});
import axios from 'axios';
import { GET_COURSES, ADD_COURSE, DELETE_COURSE, COURSES_LOADING, EDIT_COURSE } from './types';

export const getCourses = () => dispatch => {
    dispatch(setCoursesLoading());
    axios.get('/api/courses').then(res =>
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    );
};

export const addCourse = course => dispatch => {
    axios.post('/api/courses', course).then(res =>
        dispatch({
            type: ADD_COURSE,
            payload: res.data
        })
    );
};

export const deleteCourse = id => dispatch => {
    axios.delete(`/api/courses/${id}`).then(res =>
        dispatch({
            type: DELETE_COURSE,
            payload: id
        })
    );
};

export const editCourse = (CourseEdit, id) => dispatch => {
    dispatch(setCoursesLoading());
    axios.put(`/api/courses/${id}`, CourseEdit).then(res =>
        dispatch({
            type: EDIT_COURSE,
            payload: res.data
        })
    );
};

export const setCoursesLoading = () => {
    return {
        type: COURSES_LOADING
    };
};
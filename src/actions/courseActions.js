
const Dispatcher = require('../dispatcher/appDispatcher');
const CourseApi = require('../api/courseApi');
const ActionTypes = require('../constants/actionTypes');

const CourseActions = {
  createCourse(course) {
    const newCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: newCourse
    });
  },
  updateCourse(course) {
    debugger;
    const updatedCourse = CourseApi.saveCourse(course);
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: updatedCourse
    });
  },
  deleteCourse(id) {
    CourseApi.deleteCourse(id);
    Dispatcher.dispatch({
      id,
      actionType: ActionTypes.DELETE_COURSE
    })
  }
};

module.exports = CourseActions;
'use strict';

const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const AuthorStore = require('./authorStore');
const CourseStore = require('./courseStore');

let _courses = [];

Dispatcher.register((action) => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      AuthorStore.init(action.initialData.authors);
      CourseStore.init(action.initialData.courses);
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      AuthorStore._createAuthor(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      AuthorStore._updateAuthor(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      AuthorStore._removeAuthor(action.id);
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_COURSE:
      CourseStore._createCourse(action.course);
      CourseStore.emitChange();
      break;
    case ActionTypes.UPDATE_COURSE:
      CourseStore._updateCourse(action.course);
      CourseStore.emitChange();
      break;
    case ActionTypes.DELETE_COURSE:
      CourseStore._removeCourse(action.id);
      CourseStore.emitChange();
      break;
    default:
  }
});

module.exports = {
  AuthorStore,
  CourseStore
};
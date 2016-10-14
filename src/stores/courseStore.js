'use strict';

const EventEmitter = require('events').EventEmitter;
const _ = require('lodash');
const CHANGE_EVENT = 'change';

let _courses = [];

const CourseStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  getAllCourses() {
    console.log('courses');
    return _courses;
  },

  getCourseById(id) {
    return _.find(_courses, {id});
  },


  init(courses) {
    _courses = courses;
  },

  _createCourse(course) {
    _courses.push(course);
  },

  _updateCourse(course) {
    debugger;
    let existingCourse = _.find(_courses, { id: course.id });
    let existingCourseIndex = _.indexOf(_courses, existingCourse);
    _courses.splice(existingCourseIndex, 1, course);
  },

  _removeCourse(id) {
    _.remove(_courses, (course) => {
      return id === course.id
    });
  }
});

module.exports = CourseStore;

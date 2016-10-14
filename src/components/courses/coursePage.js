'use strict';

const React = require('react');
const Link = require('react-router').Link;
const CourseStore = require('../../stores/stores').CourseStore;
const CourseList = require('../courses/courseList');

const CoursePage = React.createClass({
  getInitialState() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },
  componentWillMount() {
    console.log('emit');
    CourseStore.addChangeListener(this._onChange);
  },
  componentWillUnmount() {
    CourseStore.removeChangeListener(this._onChange)
  },
  _onChange() {
    this.setState({
      authors: CourseStore.getAllCourses()
    })
  },
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to="addCourse" className="btn btn-default">Add course</Link>
        <CourseList courses={this.state.courses}/>
      </div>
    )
  }
});

module.exports = CoursePage;
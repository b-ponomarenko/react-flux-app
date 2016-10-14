'use strict';

const React = require('react');
const Router = require('react-router');
const CourseActions = require('../../actions/courseActions');
const CourseStore = require('../../stores/stores').CourseStore;
const CourseForm = require('./courseForm');
const toastr = require('toastr');

const ManageCoursePage = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },
  mixins: [
    Router.Navigation
  ],
  getInitialState() {
    return {
      course: {id: '', title: '', watchHref: '', author: {id: '', name: ''}, length: '', category: ''},
      errors: {},
      dirty: false
    };
  },
  componentWillMount() {
    const courseId = this.props.params.id;
    if ( courseId ) {
      this.setState({ course: CourseStore.getCourseById(courseId) });
    }
  },
  setCourseState(e) {
    const field = e.target.name;
    const value = e.target.value;
    this.state.course[field] = value;
    this.setState({course: this.state.course, dirty: true});
  },
  saveCourse(e) {
    e.preventDefault();
    if ( this.state.course.id ) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }
    this.setState({dirty: false});
    toastr.success('Author saved.');
    this.transitionTo('courses');
  },
  render() {
    return (
      <CourseForm course={this.state.course} onChange={this.setCourseState} onSave={this.saveCourse}/>
    )
  }
});

module.exports = ManageCoursePage;
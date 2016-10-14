'use strict';

const React = require('react');
const Link = require('react-router').Link;
const CourseActions = require('../../actions/courseActions');
const toastr = require('toastr');

const CourseList = React.createClass({
  deleteCourse(id, e) {
    e.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success(`Course ${id} was deleted`);
  },
  render() {
    const createAuthorRow = (course) => {
      return (
        <tr key={course.id}>
          <td><a href={course.watchHref}>Watch</a></td>
          <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
          <td><Link to="manageCourse" params={{id: course.id}}>{course.title}</Link></td>
          <td><a href={course.author.id}>{course.author.name}</a></td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
      );
    };
    return (
      <table className="table">
        <thead>
          <th></th>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </thead>
        <tbody>
          {this.props.courses.map(createAuthorRow, this)}
        </tbody>
      </table>
    )
  }
});

module.exports = CourseList;
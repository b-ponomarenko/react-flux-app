'use strict';

const React = require('react');
const Input = require('../common/textInput');

const CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },
  render() {
    return (
      <form>
        <h1>Edit Course</h1>
        <Input name="title" label="Title" onChange={this.props.onChange} value={this.props.course.title} />
        <Input name="category" label="Category" onChange={this.props.onChange} value={this.props.course.category} />
        <Input name="length" label="Length" onChange={this.props.onChange} value={this.props.course.length}/>
        <input type="submit" className="btn btn-default" value="Save" onClick={this.props.onSave}/>
      </form>
    )
  }
});

module.exports = CourseForm;
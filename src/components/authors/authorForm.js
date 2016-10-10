'use strict';

const React = require('react');
const Input = require('../common/textInput');

const AuthorForm = React.createClass({
	propTypes: {
		author: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSave: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
	render() {
		return (
			<form action="">
				<h1>Manage Author</h1>
				<Input name="firstName" label="First Name" onChange={this.props.onChange} value={this.props.author.firstName} error={this.props.errors.firstName}/>
				<Input name="lastName" label="Last Name" onChange={this.props.onChange} value={this.props.author.lastName} error={this.props.errors.lastName}/>
				<input type="submit" className="btn btn-default" value="Save" onClick={this.props.onSave}/>
			</form>
		)
	}
});

module.exports = AuthorForm;

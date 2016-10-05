'use strict';

const React = require('react');
const Input = require('../common/textInput');

const AuthorForm = React.createClass({
	render() {
		return (
			<form action="">
				<h1>Manage Author</h1>
				<Input name="firstName" label="First Name" onChange={this.props.onChange} value={this.props.author.firstName} />
				<Input name="lastName" label="Last Name" onChange={this.props.onChange} value={this.props.author.lastName} />
				<input type="submit" className="btn btn-default" value="Save" onClick={this.props.onSave}/>
			</form>
		)
	}
});

module.exports = AuthorForm;

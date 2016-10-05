'use strict';

const React = require('react');
const AuthorForm = require('./authorForm');
const AuthorApi = require('../../api/authorApi');

const ManageAuthorPage = React.createClass({
	getInitialState() {
		return {
			author: { id: '', firstName: '', lastName: '' }
		};
	},

	setAuthorState(e) {
		const field = e.target.name;
		const value = e.target.value;
		this.state.author[field] = value;
		this.setState({author: this.state.author});
	},

	saveAuthor(e) {
		e.preventDefault();
		AuthorApi.saveAuthor(this.state.author);
	},

  render() {
    return (
			<AuthorForm author={this.state.author}  onChange={this.setAuthorState}  onSave={this.saveAuthor} />
    )
  }
});

module.exports = ManageAuthorPage;

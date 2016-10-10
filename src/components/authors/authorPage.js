'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const AuthorStore = require('../../stores/authorStore');
const AuthorList = require('./authorList');

const Authors = React.createClass({
	getInitialState() {
		return {
			authors: AuthorStore.getAllAuthors()
		}
	},
	render() {
		return (
			<div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add author</Link>
				<AuthorList authors={this.state.authors}/>
			</div>
		)
	}
});

module.exports = Authors;

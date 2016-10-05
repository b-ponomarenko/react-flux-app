'use strict';

const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const AuthorApi = require('../../api/authorApi');
const AuthorList = require('./authorList');

const Authors = React.createClass({
	getInitialState() {
		return {
			authors: []
		}
	},
	componentWillMount() {
		this.setState({
			authors: AuthorApi.getAllAuthors()
		});
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

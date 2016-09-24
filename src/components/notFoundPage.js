'use strict';

const React = require('react');
const Link = require('react-router').Link;

const NotFountPage = React.createClass({
	render() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<p>Whoops! Sorry, there is nothing to see here.</p>
				<p><Link to="app">Back to Home</Link></p>
			</div>
		)
	}
});

module.exports = NotFountPage;
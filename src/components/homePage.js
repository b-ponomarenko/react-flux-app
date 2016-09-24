'use strict';

const React = require('react');
const Link = require('react-router').Link;


const Home = React.createClass({
	render() {
		return (
			<div className="jumbotron">
				<h1>Pluralsight Administration</h1>
				<p>React, React Router, and Flux for ultra-responsive web apps.</p>
				<Link to="about" className="btn btn-primary">Learn More</Link>
			</div>
		)
	}
});

module.exports = Home;
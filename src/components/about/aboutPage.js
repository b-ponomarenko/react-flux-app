'use strict';

const React = require('react');

const About = React.createClass({
	statics: {
		willTransitionTo(transition, params, query, callback) {
			console.log('to');
			console.log(arguments);
			callback();
		},
		willTransitionFrom(transition, component) {
			console.log('from');
			console.log(arguments);
		}
	},
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</p>
			</div>
		)
	}
});

module.exports = About;
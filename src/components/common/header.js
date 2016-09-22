'use strict';

const React = require('react');

const Header = React.createClass({
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						<img style={{maxWidth: '100%', maxHeight: '100%'}} src="images/pluralsight-logo.png" alt=""/>
					</a>
					<ul className="nav navbar-nav">
						<li><a href="/">Home</a></li>
						<li><a href="/#authors">Authors</a></li>
						<li><a href="/#about">About</a></li>
					</ul>
				</div>
			</nav>
		)
	}
});

module.exports = Header;
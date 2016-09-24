'use strict';

const React = require('react');
const Link = require('react-router').Link;

const Header = React.createClass({
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link  to="app" className="navbar-brand">
						<img style={{maxWidth: '100%', maxHeight: '100%'}} src="images/pluralsight-logo.png" alt=""/>
					</Link>
					<ul className="nav navbar-nav">
						<li><Link activeClassName={'activeClass'} to="app" >Home</Link></li>
						<li><Link activeClassName={'activeClass'} to="authors">Authors</Link></li>
						<li><Link activeClassName={'activeClass'} to="about">About</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
});

module.exports = Header;
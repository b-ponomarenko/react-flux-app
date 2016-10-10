'use strict';

const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const History = Router.History;
const NotFoundRouter = Router.NotFoundRoute;
const Redirect = Router.Redirect;

const routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="authors" handler={require('./components/authors/authorPage')} />
		<Route name="addAuthor" path="author" handler={require('./components/authors/ManageAuthorPage')} />
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<Route name="manageAuthor" path="author/:id" handler={require('./components/authors/ManageAuthorPage')} />
		<NotFoundRouter handler={require('./components/notFoundPage')}/>
		<Redirect from="about-us" to="about" />
		<Redirect from="about/*" to="about" />
	</Route>
);

module.exports = routes;

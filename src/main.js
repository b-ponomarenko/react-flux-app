
const React = require('react');
const Router = require('react-router');
const routes = require('./routes');
const InitActions = require('./actions/initActions');

InitActions.initApp();

Router.run(routes, /*Router.HistoryLocation,*/ (Handler) => {
	React.render(<Handler/>, document.getElementById('app'));
});
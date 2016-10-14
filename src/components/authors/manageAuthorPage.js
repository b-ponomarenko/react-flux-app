'use strict';

const React = require('react');
const Router = require('react-router');
const AuthorForm = require('./authorForm');
const AuthorActions = require('../../actions/authorActions');
const AuthorStore = require('../../stores/stores').AuthorStore;
const toastr = require('toastr');

const ManageAuthorPage = React.createClass({
	mixins: [
			Router.Navigation
	],

	statics: {
		willTransitionTo() {

		},
		willTransitionFrom(transition, component) {
			if ( component.state.dirty && !confirm('Leave without saving')) {
				transition.abort();
			}
		}
	},

	getInitialState() {
		return {
			author: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
	},

	authorFormIsValid() {
		let formIsValid = true;
		this.state.errors = {}; // clear any previous errors.
		if ( this.state.author.firstName.length < 3 ) {
			this.state.errors.firstName = 'First name must be at least 3 characters.';
			formIsValid = false;
		}

		if ( this.state.author.lastName.length < 3 ) {
			this.state.errors.lastName = 'Last name must be at least 3 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
	},

	setAuthorState(e) {
		const field = e.target.name;
		const value = e.target.value;
		this.state.author[field] = value;
		this.setState({author: this.state.author, dirty: true});
	},

	componentWillMount() {
		const authorId = this.props.params.id; // from path '/author/:id'
		if ( authorId ) {
			this.setState({ author: AuthorStore.getAuthorById(authorId) });
		}
	},

	saveAuthor(e) {
		e.preventDefault();
		if ( !this.authorFormIsValid() ) {
			return;
		}
		if ( this.state.author.id ) {
			AuthorActions.updateAuthor(this.state.author);
		} else {
			AuthorActions.createAuthor(this.state.author);
		}
		this.setState({dirty: false});
		toastr.success('Author saved.');
		this.transitionTo('authors');
	},

  render() {
    return (
			<AuthorForm author={this.state.author}  onChange={this.setAuthorState}  onSave={this.saveAuthor} errors={this.state.errors}/>
    )
  }
});

module.exports = ManageAuthorPage;

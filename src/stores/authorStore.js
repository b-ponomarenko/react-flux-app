'use strict';

const EventEmitter = require('events').EventEmitter;
const _ = require('lodash');
const CHANGE_EVENT = 'change';

let _authors = [];

const AuthorStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange() {
		this.emit(CHANGE_EVENT);
	},

	getAllAuthors() {
		return _authors;
	},

	getAuthorById(id) {
		return _.find(_authors, {id});
	},

	init(authors) {
		_authors = authors;
	},

	_createAuthor(author) {
		_authors.push(author);
	},

	_updateAuthor(author) {
		let existingAuthor = _.find(_authors, { id: author.id });
		let existingAuthorIndex = _.indexOf(_authors, existingAuthor);
		_authors.splice(existingAuthorIndex, 1, author);
	},

	_removeAuthor(id) {
		_.remove(_authors, (author) => {
			return id === author.id
		});
	}

});


module.exports = AuthorStore;
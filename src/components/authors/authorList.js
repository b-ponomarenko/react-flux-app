'use strict';

const React = require('react');
const Link = require('react-router').Link;
const AuthorActions = require('../../actions/authorActions');
const toastr = require('toastr');

const AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},
	deleteAuthor(id, e) {
		e.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success(`Author ${id} was deleted`);
	},
	render() {
		const createAuthorRow = (author) => {
			return (
				<tr key={author.id}>
					<td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
					<td>
						<Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link>
					</td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			)
		};
		return (
			<table className="table">
				<thead>
				<th></th>
				<th>ID</th>
				<th>Name</th>
				</thead>
				<tbody>
				{this.props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		)
	}
});

module.exports = AuthorList;
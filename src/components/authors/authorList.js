'use strict';

const React = require('react');
const Link = require('react-router').Link;

const AuthorList = React.createClass({
	propTypes: {
		authors: React.PropTypes.array.isRequired
	},
	render() {
		const createAuthorRow = (author) => {
			return (
				<tr key={author.id}>
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
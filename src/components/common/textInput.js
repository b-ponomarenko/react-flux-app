'use strict';

const React = require('react');

const Input = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		label: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		error: React.PropTypes.string
	},
	render() {
		let wrapperClass = 'form-group';
		if ( this.props.error && this.props.error.length > 0 ) {
			wrapperClass += ' has-error';
		}
		return (
			<div className={wrapperClass}>
				<label>
					{this.props.label}
					<input
						type="text"
						name={this.props.name}
						className="form-control"
						placeholder={this.props.placeholder}
						ref={this.props.name}
						value={this.props.value}
						onChange={this.props.onChange}
					/>
					<div className="input">{this.props.error}</div>
				</label>
			</div>
		)
	}
});

module.exports = Input;

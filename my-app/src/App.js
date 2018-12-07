'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

	class LikeButton extends React.Component {
		constructor(props) {
			super(props);
			this.state = { liked: false };
		}
	
		render() {
			if (this.state.liked) {
				return 'You liked comment number ' + this.props.commentID;
			}
	
			return e(
				'button',
				{ onClick: () => this.setState({ liked: true }) },
				'Like'
			);
		}
	}

export default LikeButton;

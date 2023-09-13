import React, { Component } from "react";
import './post-list-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class PostListItem extends Component {

	render() {
		const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
		let classNames = 'app-list-item d-flex justify-content-between';

		if (important) {
			classNames += ' important';
		}
		if (like) {
			classNames += ' like';
		}
		
		return(
			<div className = { classNames } >
			<span className="app-list-item-label" onClick={onToggleLiked}>
				{label}
			</span>
			<div className="d-flex justify-content-center align-items-center">
				<button className="btn-star btn-sm" type="button" onClick={onToggleImportant}>
					<FontAwesomeIcon icon={faStar} />
				</button>
				<button className="btn-trash btn-sm" type="button" onClick={onDelete}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
				<FontAwesomeIcon icon={faHeart} className="fa-heart"/>
			</div>
		</div>
		)
	}
};

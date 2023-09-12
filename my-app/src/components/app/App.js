import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faHeart, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ label: 'Going to learn React', important: false, id: 1 },
				{ label: 'Going to chill out...', important: false, id: 2 },
				{ label: 'Meet a friend.', important: false, id: 3 },
			]
		};
		this.deleteitem = this.deleteitem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.maxId = 4;
	}

	deleteitem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

			return {
				data: newArr
			}
		});
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div>
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={this.state.data} onDelete={this.deleteitem} />
				<PostAddForm onAdd={this.addItem}/>
			</div>
		)
	}
}

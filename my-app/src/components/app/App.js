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
				{ label: 'Going to learn React', important: false, like:false, id: 1 },
				{ label: 'Going to chill out...', important: false, like:false, id: 2 },
				{ label: 'Meet a friend.', important: false, like:false, id: 3 },
			]
		};
		this.deleteitem = this.deleteitem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.maxId = 4;
		this.onToggleProperty = this.onToggleProperty.bind(this);
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

	onToggleProperty(id, propName) {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = {...old, [propName]: !old[propName]};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

			return {
				data: newArr
			}
		})
	}

	render() {
		const {data} = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		return (
			<div>
				<AppHeader liked={liked} allPosts={allPosts}/>
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={this.state.data} onDelete={this.deleteitem} onToggleImportant={(id) => this.onToggleProperty(id, 'important')}
				onToggleLiked={(id) => this.onToggleProperty(id, 'like')}/>
				<PostAddForm onAdd={this.addItem}/>
			</div>
		)
	}
}

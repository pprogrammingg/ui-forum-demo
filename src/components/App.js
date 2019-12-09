import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Posts from './Posts';
import AddPost from './AddPost';
import About from './pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		axios
			.get('/postings')
			.then((res) => this.setState({ posts : res.data }));
	}

	// Add forum post
	addPost = (messageBody, userFirstName, userLastName, originalPostingId) => {
		axios
			.post("/postings", {
				messageBody,
				userFirstName,
				userLastName,
				originalPostingId
			})
			.then(axios
				.get(`/postings?userFirstName=${userFirstName}&userLastName=${userLastName}`)
				.then((res) => this.setState({ posts : res.data }))
			);
	};
	
	render() {
		return (
		<Router>
			<div className='App'>
					<div className='container'>
						<Header />
						<Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<AddPost addPost={this.addPost} />
									<Posts
										posts={this.state.posts}
										addComment={this.addPost} 
									/>
								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
				</div>
			</div>
		</Router>
		);
	}
}

export default App;

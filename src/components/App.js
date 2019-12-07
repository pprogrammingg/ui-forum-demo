import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import Posts from './Posts';
import AddPost from './AddPost';
import About from './pages/About';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
		posts: []
	};

  // Add forum post
	addPost = (messageBody) => {
		axios
			.post("/postings", {
				messageBody
			})
			.then((res) => {
				res.data.id = uuid.v4();
				this.setState({ posts: [...this.state.posts, res.data] });
      });
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

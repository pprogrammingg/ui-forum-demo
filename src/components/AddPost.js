import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddPost extends Component {
    state = {
        messageBody : '',
        userFirstName : '',
        userLastName : ''
    }
    
    onChange = (e) => {
        // no need to climb up any ladder, as working with component level state
        this.setState( {
            // avoid doing this for each input by using e.target.name
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) => {
        // like JS prevent default submit behaviour
        e.preventDefault();
        this.props.addPost(this.state.messageBody, this.state.userFirstName, this.state.userLastName);
        this.setState({ messageBody : '', userFirstName : '', userLastName : ''});
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{ 
                display : 'flex', 
                flexDirection: 'column', 
                justifyContent : 'flex-start',
                width : '650px' }}>
                <textarea
                    name="messageBody"
                    placeholder="Enter Post body"
                    rows={10}
                    style={{ flex : '10', padding : '5px' }}
                    value={ this.state.messageBody }
                    onChange={ this.onChange }
                />
                <input
                    type="text"
                    name="userFirstName"
                    placeholder="Enter user's first name."
                    style={{ flex : '10', padding : '5px' }}
                    value={ this.state.userFirstName }
                    onChange={ this.onChange }
                />
                <input
                    type="text"
                    name="userLastName"
                    placeholder="Enter user's last name."
                    style={{ flex : '10', padding : '5px' }}
                    value={ this.state.userLastName }
                    onChange={ this.onChange }
                />
                <input
                    type="submit"
                    name="submit"
                    className="btn"
                    style={{ flex: 'none', alignSelf: 'flex-start' }}
                />
            </form>
        )
    }
}

// PropTypes
AddPost.propTypes = {
    addPost : PropTypes.func.isRequired
}

export default AddPost;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddPost extends Component {
    state = {
        messageBody : ''
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
        this.props.addPost(this.state.messageBody);
        this.setState({ messageBody : ''});
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{ display : 'flex', alignItems: 'flex-start' }}>
                <textarea
                    name="messageBody"
                    placeholder="Enter Post body"
                    rows={10}
                    style={{ flex : '10', padding : '5px' }}
                    value={ this.state.messageBody }
                    onChange={ this.onChange }
                />
                <input
                    type="submit"
                    name="submit"
                    className="btn"
                    style={{ flex : '1' }}
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

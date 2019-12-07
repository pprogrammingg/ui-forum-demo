import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostItem extends Component {
    
    getStyle = () => {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted'
        }
    }
    
    render() {
        const { messageBody } = this.props.post;
        return (
            <div style={ this.getStyle() }>
                <p> 
                    { messageBody } 
                </p>
            </div>
        )
    }
}

// PropTypes, <className>.propTypes = { prop: validation_rule}
PostItem.propTypes = {
    post : PropTypes.object.isRequired
}

export default PostItem;

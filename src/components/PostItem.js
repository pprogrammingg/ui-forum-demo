import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostItem extends Component {
    
    getStyle = () => {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            marginTop : '10px',
            borderBottom : '1px red dotted',
            display : 'flex'
        }
    }
    
    render() {
        const { messageBody, userFirstName, userLastName } = this.props.post;
        return (
            <div style={ this.getStyle() }>
                <pre style={{ flex : '1', padding : '5px' }}>
                    from: { userFirstName } { userLastName } <br />
                    Location: Toronto
                </pre>
                <p style={{ padding : '5px' }}>
                </p>
                <p style={{ flex : '10', padding : '5px' }}> 
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

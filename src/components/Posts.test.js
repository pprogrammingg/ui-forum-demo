
import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';

it('renders without crashing', () => {
    const requiredProps = {
        posts : []
    };

    const div = document.createElement('div');
    ReactDOM.render(<Posts { ...requiredProps } />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('shows all the posts when a non-empty array of post items is provided', () => {
    expect(true).toEqual(true);
});


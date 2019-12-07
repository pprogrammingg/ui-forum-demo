import React from 'react'

export default function About() {
    return (
        // JSX requires to have wrapping element in return, if we do not have one, we can wrap it in a ghost element called React.fragment
        <React.Fragment>
            <h1>About</h1>
            <p>Forum Post Demo</p>
        </React.Fragment>
    )
}

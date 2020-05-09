import React from 'react'

class SharedComponent extends React.Component {
    render() {
        return (
            <div style={{padding: 30, backgroundColor: 'red'}}>
                <h2>My shared component</h2>
            </div>
        );
    }
}

export default SharedComponent;
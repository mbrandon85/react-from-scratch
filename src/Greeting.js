import React from "react";

class Greeting extends React.Component {

    style = {
        color: '#00f'
    };
    
    render() {
        return (
            <div
                style={this.style}
                className="greeting">
                Hello React!
            </div>
        );
    }
}

export default Greeting;
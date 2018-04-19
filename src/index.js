import React from "react";
import ReactDOM from "react-dom";

import './global.scss';

const style = {
    color: '#00f'
};

const Index = () => {
    return <div style={style} className="greeting">Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
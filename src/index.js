import React from "react";
import ReactDOM from "react-dom";

import './global.scss';
import Greeting from './Greeting';

const Index = () => {
    return (
        <div>
            <Greeting />
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("index"));
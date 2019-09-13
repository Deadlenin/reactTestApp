import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from './testData'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


window.React = React;

render(
    <Router>
        <Menu recipes={data} />
    </Router>,
    document.getElementById("root")
);
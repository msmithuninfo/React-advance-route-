import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color: "white", background: "black", borderRadius: "5px"}} to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "white", background: "black", borderRadius: "5px"}} to="/Page1">page1</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "white", background: "black", borderRadius: "5px"}} to="/Page2">page2</NavLink></li>
                    <li><NavLink exact activeStyle={{color: "white", background: "black", borderRadius: "5px"}} to="/Page3">page3</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default MyNavigation;
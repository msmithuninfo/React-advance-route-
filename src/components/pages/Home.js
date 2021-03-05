import React, { Component } from 'react';
import {Link,NavLink, Redirect } from 'react-router-dom';

class Home extends Component {
    render() {
        if(sessionStorage.getItem('userName')==null){
            return <Redirect to='/Login' />
        }else
        {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        );
        }
    }
}

export default Home;
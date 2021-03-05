import React, { Component } from 'react';
import {Link,NavLink, Redirect } from 'react-router-dom';

class Page1 extends Component {
    render() {
        if(sessionStorage.getItem('userName')==null){
            return <Redirect to='/Login' />
        }else{
        return (
            <div>
                <h1>Page One</h1>
            </div>
        );
        }
    }
}

export default Page1;
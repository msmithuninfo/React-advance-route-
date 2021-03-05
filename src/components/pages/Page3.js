import React, { Component } from 'react';
import {Link,NavLink, Redirect } from 'react-router-dom';

class Page3 extends Component {
    constructor({match}){
        super();
        this.state={
            myname:match.params.username
        }

    }
    render() {
        if(sessionStorage.getItem('userName')==null){
            return <Redirect to='/Login' />
        }else{
        return (
            <div>
                <h1>{this.state.myname}</h1>
            </div>
        );
        }
    }
}

export default Page3;
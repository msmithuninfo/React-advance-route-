import React, { Component } from 'react';
import {Link,NavLink, Redirect } from 'react-router-dom';

class Page2 extends Component {
    constructor(){
        super();
        this.state={
            passData: "PassMyDatatoPageThree"
        }
    }
    render() {
        var para="page3/"+this.state.passData;
        if(sessionStorage.getItem('userName')==null){
            return <Redirect to='/Login' />
        }else{
        return (
            <div>
                <h1>Page Two</h1>
                <button><Link to={para}>Pass My name to page3</Link></button>
            </div>
        );
        }
    }
}

export default Page2;
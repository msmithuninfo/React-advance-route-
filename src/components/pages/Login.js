import React, { Component } from 'react';

class Login extends Component {
    Login=()=>{
        sessionStorage.setItem('userName', 'mithun')
    }
    render() {
        return (
            <div>
                <button onClick={this.Login}>LOGIN</button>
            </div>
        );
    }
}

export default Login;
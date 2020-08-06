import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContext';
 class AuthToggle extends Component {
     static contextType=AuthContext;
    render() {
        const {toggleAuth}=this.context;
        return (
            <div>
                <button onClick={toggleAuth}> Toggle Auth</button>
            </div>
        )
    }
}


export default AuthToggle;
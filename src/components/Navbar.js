import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

class Navbar extends Component {
  static contextType =ThemeContext;
  render() { 
    // console.log(this.context)
    const {isLightTheme,light,dark}=this.context;
    const theme=isLightTheme?light:dark;
    return ( 
        <AuthContext.Consumer>{(authContext)=>{
          const {isAuthenticate,toggleAuth}=authContext;
          return(
            <nav style={{ backgroundColor:theme.ui,color:theme.syntax }}>
            <h1>Context App</h1>
            <div>
              {isAuthenticate?'You Are Loged In':'you Are Logout'}
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              {isAuthenticate ?<li>LogedIn</li>:<li><button onClick={toggleAuth}>  Login</button></li> }
            </ul>
          </nav>
          )
        }}

        </AuthContext.Consumer>
    );
  }
}
 
export default Navbar;
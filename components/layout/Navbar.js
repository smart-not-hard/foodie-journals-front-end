import Link from 'next/link';
import Login from './Login';
import Signup from './Signup';
import Search_form from './Search_form';
import React from 'react';
import axios from 'axios';

const url = require("../url_back");
const post_url = url+'users/register/'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 0,
      signup:0,
      signout:0,
      account:0,
    }
    this.accountCreateHandler = this.accountCreateHandler.bind(this);
  }

  async accountCreateHandler(account){
    console.log(account);
    const response = await axios.post(post_url, account);
    console.log(response.data)
  }



  render(){
    return(
      <nav className="container navbar navbar-expand-lg navbar-light mt-3 mb-3">
        <a href="/" className="navbar-brand ml-3 d-none d-sm-inline-block">
          <img className="nav-img rounded-circle" src="assets/logo.png" alt="Logo" style={{width:"80px"}}/>
        </a>
        <a className="navbar-brand d-inline-block mx-auto" href="/">
          <h1>Foodie Journals</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-50 flex-md-column " id="navbarCollapse">

          <Search_form/>
          <ul className="navbar-nav ml-auto large mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link py-2 ml-3 mt-3" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link py-2 ml-3 mt-3" href="/recipes">Recipes</a>
            </li>
            <li className="nav-item" id="login-tab">
              <a className="nav-link py-2 ml-3 mt-3" href="#modalLoginForm" data-toggle="modal">Login</a>
            </li>
            <li className="nav-item d-none" id="my-account">
              <a className="nav-link py-2 ml-3 mt-3" href="/account">My Account</a>
            </li>
            <li className="nav-item" id="create-tab">
              <a className="nav-link py-2 ml-3 mt-3" href="#modalRegisterForm" data-toggle="modal">Create Account</a>
            </li>
            <li className="nav-item d-none" id="logout-tab">
              <a className="nav-link py-2 ml-3 mt-3" href="/">Log Out</a>
            </li>
          </ul>
        </div> {/* collapse navbar-collapse */}
        
        <Login/>
        <Signup onAccountCreate={this.accountCreateHandler}/>


      </nav>
    )
  }
}

export default Navbar;

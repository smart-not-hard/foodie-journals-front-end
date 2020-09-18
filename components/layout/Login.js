import React from 'react';
import Router from 'next/router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const newState = {
        [event.target.name]: event.target.value
    }

    this.setState(newState);
  }
  handleSubmit(event) {
    
    event.preventDefault();

    // console.log('Submit', this.state);

    this.props.onAccountLogin(this.state);
    this.setState({
        email: '',
        password: '',
      });
    // $('#modalLoginForm').modal('toggle');
  }

  render(){
    return(
      <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Welcome Back!</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">

            {/* Default form login */}
              <form className="text-center border border-light p-5" onSubmit={this.handleSubmit}>

                <p className="h4 mb-4">Sign in</p>

                {/* <!-- Email --> */}
                <input type="email" name="email" className="form-control mb-4" placeholder="Email Address" value={this.state.email} onChange={this.handleChange}/>

                {/* <!-- Password --> */}
                <input type="password" className="form-control mb-4" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="password"/>

                <div className="d-flex justify-content-around">
                  <div>
                    {/* <!-- Remember me --> */}
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                    </div>
                  </div>
                  <p className="text-danger d-none" id='wrong-password'>Your user name or password is not correct!</p>
                  <div>
                    {/* <!-- Forgot password --> */}
                    <a href="">Forgot password?</a>
                  </div>
                </div>

                {/* <!-- Sign in button --> */}
                <button className="btn btn-info btn-block my-4" type="submit" >Sign in</button>

              </form>
              {/* Default form login */}

            </div>  
          </div>
        </div> 
      </div>
    )
  }
}

  

export default Login;
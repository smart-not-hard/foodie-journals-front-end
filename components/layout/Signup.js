import React from 'react';
import Router from 'next/router';


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
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

    this.props.onAccountCreate(this.state);
    this.setState({
        username: '',
        email: '',
        password: '',
      });
    $('#modalRegisterForm').modal('toggle');
    Router.push('/account');
    setTimeout(()=>{
      $("#my-account").toggleClass('d-none');
      $("#login-tab").toggleClass('d-none');
      $("#create-tab").toggleClass('d-none');
      $("#logout-tab").toggleClass('d-none');
    }, 1000)
    
  }

  render(){
    return(

      <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center ">
              <h4 className="modal-title w-100 font-weight-bold">Thank you for joining the foodies family!</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              {/* <!-- Default form register --> */}
              <form className="text-center border border-light p-5" onSubmit={this.handleSubmit} >

                <p className="h4 mb-4 mt-0">Sign up</p>

                <input value={this.state.username} type="text" id="username" name="username" className="form-control mb-4" placeholder="User Name " onChange={this.handleChange}/>

                <input value={this.state.email} type="email" id="email" name="email" className="form-control mb-4" placeholder="E-mail" onChange={this.handleChange}/>

                <input value={this.state.password} type="password" id="password" name="password" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={this.handleChange}/>
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>

                {/* <!-- Sign up button --> */}
                <button className="btn btn-info my-4 btn-block" type="submit"  >Create Account</button>
              </form>
            </div>
            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Signup;
const Signup = () => (
  <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h4 className="modal-title w-100 font-weight-bold">Thank you for joining the foodies family!</h4>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body mx-3">
          {/* <!-- Default form register --> */}
          <form className="text-center border border-light p-5" action="#!">

          <p className="h4 mb-4">Sign up</p>

          <div className="form-row mb-4">
            <div className="col">
              {/* <!-- First name --> */}
              <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
            </div>
            <div className="col">
              {/* <!-- Last name --> */}
              <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
            </div>
          </div>

          {/* <!-- E-mail --> */}
          <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"/>

          {/* <!-- Password --> */}
          <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
          <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
              At least 8 characters and 1 digit
          </small>

          {/* <!-- Sign up button --> */}
          <button className="btn btn-info my-4 btn-block" type="submit">Create</button>
          </form>
          {/* <!-- Default form register --></hr> */}
  
        </div>
      </div>
    </div>
  </div>
)


export default Signup;
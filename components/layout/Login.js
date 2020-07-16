const Login = () => (

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
          <form className="text-center border border-light p-5" action="/login" method="post">

            <p className="h4 mb-4">Sign in</p>

            {/* <!-- Email --> */}
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>

            {/* <!-- Password --> */}
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>

            <div className="d-flex justify-content-around">
              <div>
                {/* <!-- Remember me --> */}
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                </div>
              </div>
              <div>
                {/* <!-- Forgot password --> */}
                <a href="">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Sign in button --> */}
            <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

          </form>
          {/* Default form login */}

        </div>  
      </div>
    </div>
  </div>
)

export default Login;
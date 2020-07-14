import Link from 'next/link';

const Navbar = () => (
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

      <form className="form-inline ml-auto">
        <div className="input-group">
          <input type="text" className="form-control border-dark" placeholder="Search"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i>Go</button>
          </div>
        </div>
      </form>
      <ul className="navbar-nav ml-auto large mb-2 mb-md-0">
        <li className="nav-item active">
          <a className="nav-link py-2 ml-3 mt-3" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 ml-3 mt-3" href="/receipes">Receipes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 ml-3 mt-3" href="#modalLoginForm" data-toggle="modal">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 ml-3 mt-3" href="#modalRegisterForm" data-toggle="modal">Create Account</a>
        </li>
      </ul>
    </div> {/* collapse navbar-collapse */}
    
    {/* This is the Login module */}
    <div className="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                    <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                  </div>
                </div>
                <div>
                  {/* <!-- Forgot password --> */}
                  <a href="">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Sign in button --> */}
              <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>

              {/* <!-- Register --> */}
              <p>Not a member?
                <a href="#modalLoginForm" data-toggle="modal"><a href="#modalRegisterForm" data-toggle="modal">Register</a></a>
              </p>

            </form>
            {/* Default form login */}

          </div>  
        </div>
      </div> {/*modal-dialog */}
    </div> {/* modal fade */}


    {/* This is the Register module */}
    <div className="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
            <form class="text-center border border-light p-5" action="#!">

            <p class="h4 mb-4">Sign up</p>

            <div class="form-row mb-4">
              <div class="col">
                {/* <!-- First name --> */}
                <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"/>
              </div>
              <div class="col">
                {/* <!-- Last name --> */}
                <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"/>
              </div>
            </div>

            {/* <!-- E-mail --> */}
            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"/>

            {/* <!-- Password --> */}
            <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
            <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                At least 8 characters and 1 digit
            </small>

            {/* <!-- Sign up button --> */}
            <button class="btn btn-info my-4 btn-block" type="submit">Create</button>
            </form>
            {/* <!-- Default form register --></hr> */}
    
          </div>
        </div>
      </div>
    </div>  
  </nav>
)

export default Navbar;

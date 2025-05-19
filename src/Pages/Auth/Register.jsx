import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section className="bg-color">
        <div className="key  mt-4 d-flex justify-content-center align-items-center">
          <h2>Create Account</h2>
          <div className="dir">
            <ul>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-house" /> Home
                </Link>
              </li>
              <li>
                <Link id="home">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div id="input " className="mb-5 ">
            <div className="input mb-1 ">
              <label htmlFor="formGroupExampleInput" className="form-label " />
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="input mb-1">
              <label htmlFor="" className="form-label" />
              <input
                type="text"
                className="form-control"
                placeholder="last name"
              />
            </div>
            <div className="input mb-1 ">
              <label htmlFor="formGroupExampleInput" className="form-label " />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="input mb-1 ">
              <label htmlFor="formGroupExampleInput" className="form-label " />
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="input my-2 ps">
              <label htmlFor="" className="form-label">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
              </label>
              <div className="form-check mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Sign up for our newsletter
                </label>
              </div>
              <div className="log-in m-4">
                <h6>
                  If you have an account, please
                  <Link to={"/login"}>Login Here</Link>
                </h6>
              </div>
              <div className="btn ">
                <button type="submit">Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

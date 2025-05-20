import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* الهيدر */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h2 className="me-3 fw-bold">Create Account</h2>
        <div>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            <li>
              <Link to="/" className="text-decoration-none text-dark">
                <i className="fa-solid fa-house me-1" /> Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-decoration-none text-dark">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* الفورم */}
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ maxWidth: "400px", width: "100%" }} className="mb-5">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Sign up for our newsletter
            </label>
          </div>

          <div className="text-center mb-3">
            <h6>
              If you have an account, please{" "}
              <Link to="/login" className="text-decoration-none">
                Login Here
              </Link>
            </h6>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-success"
              style={{
                backgroundColor: "#082e21",
                borderColor: "#082e21",
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

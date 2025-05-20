import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 px-3">
      {/* الهيدر */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h2 className="me-3 fw-bold">Account</h2>
        <nav>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            <li>
              <a href="eye.html" className="text-decoration-none text-dark">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a
                href="sign-in.html"
                className="text-decoration-none text-dark"
              >
                Account
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* الفورم */}
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-3">
          <h4 className="fw-bold">Sign up</h4>
          <p className="fw-light">Insert your account information:</p>
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="pas"
            placeholder="Password"
          />
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" htmlFor="gridCheck">
            <i className="fa-solid fa-envelope me-2"></i> Forgot your Password?
          </label>
        </div>

        <div className="text-center mb-4">
          <h6>
            If you have an account, please{" "}
            <Link to="/register" className="text-decoration-none">
              Register Here
            </Link>
          </h6>
        </div>

        <button
          type="submit"
          id="log"
          className="btn btn-lg w-100"
          style={{
            backgroundColor: "#082e21",
            borderColor: "#082e21",
            color: "white",
          }}
        >
          LogIn
        </button>
      </div>
    </div>
  );
};

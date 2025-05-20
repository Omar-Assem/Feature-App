import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center">
        <div>
          <h2>404 Page Not Found</h2>
          <Link to="/">
            <button className="btn btn-outline-primary">Go To Home</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;

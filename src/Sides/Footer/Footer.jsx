export const Footer = () => {
  return (
    <footer className="container py-5 mt-5 position-relative">
      <div className="container footer">
        <div className="row ">
          {/* Logo & Info */}
          <div
            className="col-lg-2 text-start"
            style={{ margin: "50px 0px" }}
          >
            <img
              src="Logo.webp"
              alt="logo"
              style={{ width: "190px", height: "47px" }}
            />
            <p className="mt-3">
              <i className="fa-solid fa-location-dot me-2" />
              2357 Gordon Street, CA
            </p>
            <h4 style={{ fontSize: "20px", margin: "20px 0" }}>
              <i className="fa-solid fa-user me-2" />
              <a
                href="#"
                className="text-decoration-none text-dark"
                style={{ transition: "color 0.3s" }}
              >
                0123 456 789
              </a>
            </h4>
            <h4 style={{ fontSize: "20px", margin: "20px 0" }}>
              <i className="fa-solid fa-envelope me-2" />
              <a
                href="#"
                className="text-decoration-none text-dark"
                style={{ transition: "color 0.3s" }}
              >
                demo@gmail.com
              </a>
            </h4>
          </div>

          {/* About Us */}
          <div className="col-lg-2" style={{ margin: "50px 10px" }}>
            <h1 className="h5 fw-bold mb-3">About us</h1>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Our story
              </a>
            </h4>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Our team
              </a>
            </h4>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Designers
              </a>
            </h4>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2" style={{ margin: "50px 10px" }}>
            <h1 className="h5 fw-bold mb-3">Customer service</h1>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Home
              </a>
            </h4>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Products
              </a>
            </h4>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Contacts
              </a>
            </h4>
          </div>

          {/* Support */}
          <div className="col-lg-2" style={{ margin: "50px 10px" }}>
            <h1 className="h5 fw-bold mb-3">Support</h1>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                FAQ&apos;s
              </a>
            </h4>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Shipping
              </a>
            </h4>
            <h4>
              <a href="#" className="text-decoration-none text-dark">
                Return
              </a>
            </h4>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2" style={{ margin: "50px 10px" }}>
            <h1 className="h5 fw-bold mb-3">Newsletters</h1>
            <div className="d-flex flex-column">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control mb-2"
                style={{ padding: "10px" }}
              />
              <button className="btn btn-dark">Submit</button>
            </div>
            <div
              className="icons mt-4"
              style={{ display: "flex", justifyContent: "space-around", fontSize: "1.5rem" }}
            >
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-pinterest-p" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-twitter" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Up Button */}
      <div
        id="up"
        className="position-absolute"
        style={{
          display: "none", // تقدر تغيره لـ block لو عايز تجرب
          bottom: "0",
          right: "10px",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          background: "#082e21",
          textAlign: "center",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <i
          className="fa-solid fa-arrow-up"
          style={{
            fontSize: "25px",
            transform: "translateY(50%)",
          }}
        ></i>
      </div>
    </footer>
  );
};

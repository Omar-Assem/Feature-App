export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="row">
            <div className="col-lg-2">
              <img src="../img/Logo.webp" alt="logo" />
              <p>
                <i className="fa-solid fa-location-dot" /> 2357 Gordon Street,
                CA
              </p>
              <h4>
                <i className="fa-solid fa-user" />
                <a href="#">0123 456 789</a>
              </h4>
              <h4>
                <i className="fa-solid fa-envelope" />
                <a href="#">demo@gmail.com</a>
              </h4>
            </div>
            {/* about us */}
            <div className="col-lg-2">
              <h1>About us</h1>
              <h4>
                <a href="#">Our story</a>
              </h4>
              <h4>
                <a href="#">Our team</a>
              </h4>
              <h4>
                <a href="#">Designers</a>
              </h4>
            </div>
            {/* customer service */}
            <div className="col-lg-2">
              <h1>Customer service</h1>
              <h4>
                <a href="#">Home</a>
              </h4>
              <h4>
                <a href="#">Products</a>
              </h4>
              <h4>
                <a href="#">Contacts</a>
              </h4>
            </div>
            {/* support */}
            <div className="col-lg-2">
              <h1>Support</h1>
              <h4>
                <a href="#">FAQ&apos;s</a>
              </h4>
              <h4>
                <a href="#">Shipping</a>
              </h4>
              <h4>
                <a href="#">Return</a>
              </h4>
            </div>
            <div className="col-lg-2">
              <h1>Newsletters</h1>
              <div className="btn">
                <input type="email" placeholder="Enter Your Email" />
                <button>Submit</button>
              </div>
              <div className="icons">
                <i className="fa-brands fa-facebook-f" />
                <i className="fa-brands fa-pinterest-p" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-twitter" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

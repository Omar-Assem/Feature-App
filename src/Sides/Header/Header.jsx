import { NavLink } from "react-router-dom";
import { Dheader } from "../../Data/Data";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="Logo.webp"
              alt="Logo"
              style={{ width: "160px", height: "36px" }} // navbar-brand img
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {Dheader.links.map((e, i) => (
                <li className="nav-item" key={i}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={e.url}
                  >
                    <span
                      className="mx-3"
                      style={{ fontSize: "larger" }} // li span
                    >
                      {e.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {Dheader.icons.map((e, i) => (
                <li
                  className="nav-item position-relative" 
                  key={i}
                  id={e.id}
                >
                  <NavLink className="nav-link" to={e.url}>
                    <span>
                      <i className={e.icon}></i>
                    </span>
                    {e.count > 0 && (
                      <span
                        className="position-absolute rounded-circle text-white"
                        style={{
                          top: "-5px",
                          right: "-5px",
                          fontSize: "8px",
                          backgroundColor: "#082e21",
                          padding: "1px 4px",
                        }}
                      >
                        {e.count}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-bars" />
                </a>
                <ul className="dropdown-menu">
                  {Dheader.dropDown.map((e, i) => (
                    <li key={i}>
                      <NavLink className="dropdown-item" to={e.url}>
                        {e.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

import { NavLink } from "react-router-dom";
import { Dheader } from "../../Data/Data";


export const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <NavLink className="navbar-brand" href="#">
              <img src="Logo.webp" />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                {Dheader.links.map((e, i) => {
                  return (
                    <>
                      <li className="nav-item" key={i}>
                        <NavLink
                          id="nav"
                          className="nav-link"
                          aria-current="page"
                          to={e.url}
                        >
                          {e.title}
                        </NavLink>
                      </li>
                    </>
                  );
                })}
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                {Dheader.icons.map((e, i) => (
                  <li className="nav-item" key={i}>
                    <NavLink className="nav-link" to={e.url}>
                      <span>
                        <i className={e.icon}></i>
                      </span>
                    </NavLink>
                  </li>
                ))}

                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="fa-solid fa-bars" />
                    </span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    {Dheader.dropDown.map((e, i) => {
                      return (
                        <>
                          <li>
                            <NavLink className="dropdown-item" to={e.url}>
                              {e.title}
                            </NavLink>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

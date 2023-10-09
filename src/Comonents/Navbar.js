import React from "react";

export default function Navbar({ link, color, align, size }) {
  return (
    <>
      <body>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: color }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {link.link1}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    {link.link2}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    {link.link3}
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <h1 style={{ color: color, textAlign: align, fontSize: size }}>
          Hello <br />
          My Name is <br />
          Chaudhry Samie Tahir
        </h1>
      </body>
    </>
  );
}

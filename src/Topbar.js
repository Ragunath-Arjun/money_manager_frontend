import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";

function Topbar() {
  const Navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-primary text" href="#">
          <i className="fa-solid fa-piggy-bank fa-1x text-danger ml-5"></i>
          Money Manager
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                to={"/Homepage"}
                className="nav-link ml-5 d-flex justify-content-center"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul list-style-type="none">
              <li>
                <Popup />
              </li>
            </ul>

            <button
              className="btn btn-outline-success my-2 my-sm-0 mr-5"
              onClick={() => {
                window.localStorage.removeItem("token");
                Navigate("/");
              }}
              type="submit"
            >
              Log out
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Topbar;

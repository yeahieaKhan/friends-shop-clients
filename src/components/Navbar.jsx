import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contextApi/AuthContext";
import { Bounce, toast } from "react-toastify";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <a>Product</a>
      </li>
      <li>
        <a>About </a>
      </li>
      <li>
        <NavLink to={"/add-product"}>Add Product</NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    console.log("button clicked");
    userSignOut().then((result) => {
      toast
        .success("User SignOut successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          theme: "light",
          transition: Bounce,
        })
        .catch((error) => {
          toast.error(error.message || "Login failed!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

            theme: "light",
            transition: Bounce,
          });
        });
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-bold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Friends Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <button
              className="btn btn-secondary"
              title={user.email}
              onClick={handleSignOut}
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-secondary" to={"/auth/login"}>
                Login
              </Link>
              <Link to={"/auth/register"} className="btn btn-primary">
                Register{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  console.log(user);

  return (
    <>
      <div>
        <nav className="flex justify-around items-center p-5 mb-6">
          <div className="text-4xl">Logo</div>
          <div>
            <ul className="flex gap-5">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>

              {isAuthenticated ? (
                <>
                  <li>
                    <button
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      Logout
                    </button>
                  </li>
                  <li>{user?.email}</li>
                </>
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()}>Login</button>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

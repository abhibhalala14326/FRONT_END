import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } =
    useAuth0();

  

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white shadow-lg">
      <div className="text-lg font-bold">My App</div>

      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <button
            onClick={loginWithRedirect}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        ) : (
          <>
            <div className="flex items-center gap-2">
              {user && (
                <>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Welcome, {user.nickname}</p>
                    <p className="text-xs">{user.email}</p>
                  </div>
                </>
              )}
            </div>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

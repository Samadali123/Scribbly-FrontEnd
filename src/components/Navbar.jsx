
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { showSuccessToast, showErrorToast } from "../utils/ShowToast";
import { useAuth } from "../Context.jsx/AuthContext";
import {  logoutUser } from "../services/User.services";
// 👈 Import useAuth hook

const Navbar = () => {
  const { isAuthenticated, logout} = useAuth(); // 👈 Get auth state from context
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await logoutUser();
      logout();
      setMenuOpen(false);
      showSuccessToast("Logout successful");
      setTimeout(() => {
        navigate("/allnotes");
      }, 500);
    } catch (error) {
      console.error("Logout failed:", error);
      showErrorToast("Logout failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkClasses = "px-1 md:px-0 text-white transition";
  const activeClass =
    "inline-block border-b-2 border-red-500 text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-red-700 font-bold pb-1";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-zinc-900 text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold text-red-500 tracking-wide"
            onClick={() => setMenuOpen(false)}
          >
            Scribbly
          </NavLink>

          <div className="hidden md:flex gap-6 items-center">
            {isAuthenticated ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeClass : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/createnote"
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeClass : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Create Note
                </NavLink>
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="w-[160px] bg-gradient-to-r from-red-700 via-red-500 to-red-700 px-4 py-1.5 rounded-full hover:bg-red-700 transition font-semibold flex items-center justify-center disabled:opacity-60 border border-red-600"
                >
                  {loading ? (
                    <>
                      <TailSpin
                        height={28}
                        width={28}
                        color="#ffffff"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        visible={true}
                      />
                      <span className="ml-3 text-white text-xs font-semibold">
                        Logging out...
                      </span>
                    </>
                  ) : (
                    "Logout"
                  )}
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeClass : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeClass : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden bg-zinc-900 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-60 p-5" : "max-h-0 p-0"
          } rounded-b-xl`}
        >
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? activeClass : "text-white"}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/createnote"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? activeClass : "text-white"}`
                }
              >
                Create Note
              </NavLink>
              <button
                onClick={handleLogout}
                disabled={loading}
                className="block w-full text-left text-red-500 font-semibold mt-2 hover:text-red-400 disabled:opacity-50 flex items-center"
              >
                {loading ? (
                  <>
                    <TailSpin
                      height={20}
                      width={20}
                      color="#ffffff"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      visible={true}
                    />
                    <span className="ml-2">Logging out...</span>
                  </>
                ) : (
                  "Logout"
                )}
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? activeClass : "text-white"}`
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${isActive ? activeClass : "text-white"}`
                }
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>

      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;

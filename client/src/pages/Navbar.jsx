import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/product?search=${searchTerm}`);
  };

  const loggedIn = JSON.parse(localStorage.getItem("userdata"));
  const handleLogout = () => {
    localStorage.removeItem("userdata");
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white shadow-lg backdrop-blur-md bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              EMeds
            </Link>

            <div className="flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Medication ..."
                  className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/product"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                Product
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                Cart
              </Link>

              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <FaCloudUploadAlt className="text-lg" />
                <Link
                  to="/upload-prescription"
                  className="text-sm whitespace-nowrap"
                >
                  Upload prescription
                </Link>
              </div>
              {/* <div className="cursor-pointer"> */}
                {loggedIn ? (
                  <div className="text-red-300 cursor-pointer" onClick={handleLogout}>Logout</div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="text-gray-700 hover:text-purple-600 transition-colors duration-300 "
                    >
                      Register
                    </Link>
                  </>
                )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

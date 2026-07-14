import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { AUTH } from "../../config/auth";
import { getLoginType, clearStorage } from "../../utils/storage";

const Header = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/products": "Products",
    "/add-product": "Add Product",

    "/categories": "Categories",
    "/add-categories": "Add Category",
    "/sub-categories": "Sub Categories",

    "/customers": "Customers",
    "/orders": "Orders",
    "/analytics": "Analytics",
    "/settings": "Settings",
  };

  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleLogout = async () => {

    const loginType = getLoginType();

    const redirectUrl =
      loginType === AUTH.STORE_ADMIN
        ? AUTH.ROUTES.STORE_ADMIN_LOGIN
        : AUTH.ROUTES.SUPER_ADMIN_LOGIN;

    navigate(redirectUrl, { replace: true });

    await logout(loginType);
  };

  return (
    <header className="app-header top-0 left-0 w-full bg-white">
      <div className="header-left">
        <button
          onClick={toggleSidebar}
          className="responsive-toggle"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <h1 className="header-title text-on-surface-variant">
          {currentTitle}
        </h1>
      </div>

      <div className="header-right">
        <div className="relative" ref={dropdownRef}>
          {/* Profile */}
          <div
            className="profile-photo cursor-pointer"
            onClick={() => setOpenDropdown((prev) => !prev)}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8N1F22O7vLB2tzLl3PewGClnWFhJATuSUOqpuYUz34jW1GzPOgqvdYVbABHPnC-V9a_QAn7quUWJ7KIHBqRGreaZs-ot_fcwtJGH774hsWYmmc3NPAbdL5sOLL8rso62b5xFrrKwc7Sksb4pgKbYTrzX0QkMkm9g9Qjk3f1mmfFi4OZhGZTjPxRV4Qc38ZVxnoob0xxEsNo9tSBEJympKxP7aDlLzEPk-WRGabMLa7-E-YpKxrP27uslPnPV79bk0whadyYM7yhI"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-xl z-40 transform transition-all duration-200 origin-top ${openDropdown
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
              }`}
          >
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold">
                {user?.name || "Admin"}
              </p>

              <p className="text-xs text-gray-500 capitalize">
                {user?.role?.replace("_", " ") || ""}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="lower-nav-item lower-nav-inactive w-full text-left"
            >
              <span className="nav-icon icon-color">
                <FiLogOut />
              </span>

              {isOpen && (
                <span className="text-sm">Logout</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
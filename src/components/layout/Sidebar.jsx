import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import { SIDEBAR_MENU } from "../../config/menu";
// import menu from "../../config/menu";
import useAuth from "../../hooks/useAuth";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user } = useAuth();

  const [openDropdown, setOpenDropdown] = useState(null);

  // Show menu according to logged in role
  const menuItems = SIDEBAR_MENU[user?.role]?.map((item) => ({
    ...item,
    icon: item.icon,
  }));


  return (
    <aside
      className={`
        bg-white sidebar-base fixed lg:fixed p-4
        ${isOpen ? "sidebar-open" : "sidebar-close"}
        ${isOpen ? "sidebar-lg-open" : "sidebar-lg-close"}
      `}
    >
      {/* Mobile Close */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden m-3 p-2 bg-black text-white rounded w-fit"
      >
        <IoMdClose />
      </button>

      {/* Logo */}
      <div className="editorial-container">
        {isOpen && (
          <div className="mb-8 px-4">
            <h1 className="text-lg font-black tracking-tight text-slate-900">
              AdminPanel
            </h1>

            <p className="text-xs text-on-primary-container font-medium">
              Ecommerce Management
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          // Future Dropdown Support
          if (item.children) {
            const isDropdownOpen = openDropdown === item.name;

            return (
              <div key={item.name}>
                <div
                  onClick={() =>
                    setOpenDropdown(
                      isDropdownOpen ? null : item.name
                    )
                  }
                  className={`nav-item cursor-pointer ${isOpen ? "justify-between" : "justify-center"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="nav-icon icon-color">
                      <Icon />
                    </span>

                    {isOpen && (
                      <span className="nav-text">
                        {item.name}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`ml-10 mt-1 space-y-1 overflow-hidden transition-all duration-300
                  ${isOpen && isDropdownOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  {item.children.map((sub) => (
                    <NavLink
                      key={sub.label}
                      to={sub.path}
                      onClick={() => {
                        if (window.innerWidth < 1024) {
                          toggleSidebar();
                        }
                      }}
                      className={({ isActive }) =>
                        `block text-sm px-2 py-2 rounded ${isActive
                          ? "bg-primary text-white"
                          : "text-gray-600 hover:bg-gray-100"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          }

          // Normal Menu
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => {
                setOpenDropdown(null);

                if (window.innerWidth < 1024) {
                  toggleSidebar();
                }
              }}
              className={({ isActive }) =>
                `nav-item ${isActive
                  ? "nav-item-active bg-slate-100 shadow-none"
                  : "nav-item-inactive"
                } ${isOpen ? "justify-start" : "justify-center"
                }`
              }
            >
              <span className="nav-icon icon-color">
                <Icon />
              </span>

              {isOpen && (
                <span className="nav-text">{item.name}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Card */}
      <div className="mt-auto p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
        <div className="flex items-center gap-3">
          <img
            alt="Administrator Profile"
            className="w-8 h-8 rounded-full bg-primary-fixed"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsOp5Ytoj-e6fZDIB_JAPcvf8zVL98Z080oSWWkGbiyWMqCJFb0h7bxIJAHvRPL1SRBOmOy0_Ji6fCHwFB2MPWkgkzEX_WE3Fg8K6w6x9z4-9lygswcxbDAlrIzqcyGJ-wLKcZfnP553aaOSlOTnEXZ5GZWKX8e7oOtZHIOhsYemu1VwToDkE_IXdyJ7ci1waNVlSkkgNWXUUix9WM3yEteDMruOy_a-9-fQUgzECtYcV8CWqoJDuxk1Usi7aqmr1KWXNPOgTL_5R8"
          />

          <div className="overflow-hidden">
            <p className="text-label-md font-label-md text-on-surface truncate">
              {user?.name || "Admin"}
            </p>

            <p className="text-xs text-on-surface-variant truncate capitalize">
              {user?.role?.replace("_", " ") || ""}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex bg-background min-h-screen">

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-40"
          onClick={toggleSidebar}
        />
      )}

      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />

      <main
        className={`transition-all duration-300 relative ml-0 lg:ml-[15%]
        ${isOpen ? "w-full lg:w-[90%]" : "w-full"}`}
      >
        <Header
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />

        <Outlet />
      </main>
    </div>
  );
}
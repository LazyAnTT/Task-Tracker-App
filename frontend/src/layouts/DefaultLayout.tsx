import { FC } from "react";
import { NavLink } from "react-router-dom";

const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-900">
      <aside className="w-64 bg-white shadow h-screen p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Task Tracker</h1>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
          >
            Tasks
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DefaultLayout;

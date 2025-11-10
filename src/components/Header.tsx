import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-100 font-sans w-full md:w-[100vh] lg:w-[150vh]">
      <div className="bg-fine shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-x-2 items-center">
              <img src="/metadata.png" alt="handumanan" className="w-8" />
              <h2 className="font-semibold text-md md:text-xl font-poppins text-accent">
                Handumanan
              </h2>
            </div>

            <div className="sm:flex sm:items-center space-x-5 pr-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent text-sm font-semibold hover:text-accent mr-4"
                    : "text-gray-800 text-sm font-semibold hover:text-accent mr-4"
                }>
                Home
              </NavLink>
              <NavLink
                to="/places"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent text-sm font-semibold hover:text-accent mr-4"
                    : "text-gray-800 text-sm font-semibold hover:text-accent mr-4"
                }>
                Places
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

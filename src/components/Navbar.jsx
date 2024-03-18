import { BsCart3, BsMoonFill, BsSun, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const themes = {
  light: "light",
  dracula: "dracula",
};

const getThemeLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeLocalStorage);

  const handleTheme = () => {
    const { light, dracula } = themes;
    const newTheme = theme === light ? dracula : light;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* logo */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'>
            J
          </NavLink>

          {/* dropdown */}
          <div className='dropdown'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost  lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* navbar center */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>

        {/* navbar end */}
        <div className='navbar-end '>
          {/* theme icons */}

          <label className='swap swap-rotate'>
            <input type='checkbox' onChange={handleTheme} />

            {/* sun */}

            <BsSunFill className='swap-on h-6 w-6 text-yellow-500' />

            {/* moon */}

            <BsMoonFill className=' swap-off h-6 w-6 text-yellow-500' />
          </label>

          {/* cart link */}

          <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                7
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

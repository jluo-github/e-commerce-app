import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((store) => store.cart.numItemsInCart);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className='navbar-start'>
          {/* logo */}
          <NavLink
            to='/'
            // className='hidden lg:flex btn btn-primary text-3xl items-center'>
            className='hidden lg:flex btn items-center'>
            <img
              src='./logo.png'
              alt='home'
              className='h-12 w-12 rounded-full'
            />
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

          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

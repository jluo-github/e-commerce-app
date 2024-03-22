import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "products", text: "products" },
  { id: 3, url: "cart", text: "cart" },
  { id: 4, url: "checkout", text: "checkout" },
  { id: 5, url: "orders", text: "orders" },
  { id: 6, url: "about", text: "about" },
];

const NavLinks = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        {
          /* doesn't show checkout/ orders if not login */
        }
        if ((url === "checkout" || url === "orders") && !user) {
          return null;
        }

        return (
          <li key={id}>
            <NavLink to={url} className='capitalize'>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;

import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return (
    <nav>
      <div
        className="md:hidden text-2xl  bg-yellow-200 p-6 text-black "
        onClick={() => setOpen(!open)}
      >
        {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex duration-1000 gap-10 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200 text-black px-10 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

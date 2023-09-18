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
    <nav className="mx-auto max-w-7xl pt-6">
      <div
        className="md:hidden text-2xl bg-white border p-6 text-black "
        onClick={() => setOpen(!open)}
      >
        {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`justify-center bg-white font-bold p-5 rounded-xl md:flex duration-1000 gap-10 absolute md:static ${
          open ? "top-24" : "-top-60"
        }  text-black border px-10 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

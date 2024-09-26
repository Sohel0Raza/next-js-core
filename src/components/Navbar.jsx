"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    { titel: "Home", path: "/" },
    { titel: "Blogs", path: "/blogs" },
    { titel: "About Us", path: "/about" },
    { titel: "Service", path: "/service" },
  ];
  const pathName = usePathname();

  return (
    <div className="fixed z-40 w-full">
      <div className="flex justify-between items-center py-3 px-5 bg-[#fff] shadow-xl">
        <h2 className="text-3xl uppercase font-bold">
          Next <span className="text-primary">Hero</span>
        </h2>
        <ul className="flex space-x-5 items-center font-medium text-lg">
          {links.map((link) => (
            <Link
              href={link.path}
              className={`${pathName === link.path ? "text-primary" : ""}`}
            >
              <li>{link.titel}</li>
            </Link>
          ))}
        </ul>
        <button className="btn-primary">Login</button>
      </div>
    </div>
  );
}

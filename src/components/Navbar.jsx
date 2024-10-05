"use client";

import Link from "next/link";
import {useSession} from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const links = [
    { titel: "Home", path: "/" },
    { titel: "Posts", path: "/posts" },
    { titel: "Meals", path: "/meals" },
    { titel: "Blogs", path: "/blogs" },
    { titel: "About Us", path: "/about" },
    { titel: "Categories", path: "/categories" },
  ];
  const session = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };
  return (
    <div className="w-full">
      <div className="flex justify-between item
      s-center py-3 px-5 bg-[#fff] shadow-xl">
        <h2 className="text-3xl uppercase font-bold">
          Next <span className="text-primary">Hero</span>
        </h2>
        <ul className="flex space-x-5 items-center font-medium text-lg">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`${pathName === link.path ? "text-primary" : ""}`}
            >
              <li>{link.titel}</li>
            </Link>
          ))}
        </ul>
        {
          !session.status === "authenticated" ? <button onClick={handleLogin} className="btn-primary">
          Login
        </button> : <button onClick={handleLogin} className="btn-primary">
          Logout
        </button>
        }
        
      </div>
    </div>
  );
}

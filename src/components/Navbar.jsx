"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

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
  console.log("✌️session --->", session);
  const pathName = usePathname();
  const router = useRouter();
  const handleLogin = () => {
    router.push("/api/auth/signin");
  };
  return (
    <div className="w-full">
      <div
        className="flex justify-between item
      s-center py-3 px-5 bg-[#fff] shadow-xl"
      >
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
        <div className="flex justify-between items-center">
          <Image
            src={session?.data?.user?.image}
            alt={session?.data?.user?.name || "User"}
            width={50}
            height={50}
            className="rounded-full bg-gray-900 p-[1px] mr-4"
          />

          <div>
            <h6>{session?.data?.user?.name}</h6>
            <h6>{session?.data?.user?.type}</h6>
          </div>
          {session.status === "unauthenticated" ? (
            <button onClick={handleLogin} className="btn-primary">
              Login
            </button>
          ) : (
            <button onClick={() => signOut()} className="btn-primary">
              Logout
            </button>
          )}
          <Link href="/api/auth/signup">
            <button className="btn-primary">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

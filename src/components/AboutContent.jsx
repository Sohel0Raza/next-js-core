import Link from "next/link";
import React from "react";

export default function AboutContent() {
  return (
    <div>
      <div className="">
        <ul className="flex space-x-6 items-center font-semibold text-lg">
          <Link href="/about/mission">
            <li>Mission</li>
          </Link>
          <Link href="/about/vision">
            <li>Vision</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Page() {
  return (
    <div className="md:py-24 h-screen text-center">
    <h2 className="text-xl font-semibold mb-10">About Us</h2>
    <div className="">
        <ul className="flex space-x-6 items-center font-semibold text-lg">
            <Link href="/about/misson"><li>Misson</li></Link>
            <Link href="/about/vision"><li>Vision</li></Link>
        </ul>
    </div>
  </div>
  );
}

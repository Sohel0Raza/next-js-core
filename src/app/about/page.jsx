import AboutContent from "@/components/AboutContent";
import { getData } from "@/services/postApi";
export const metadata = {
  title: {
    absolute : "About Us"
  },
  description: "About Us page",
};

export default async function Page() {
  const time = await getData("http://localhost:3000/time", { cache: 'no-store' })

  return (
    <div className="md:py-24 h-screen text-center ">
      <h2 className="text-xl font-semibold mb-5">About Us</h2>
      <h4 className="text-2xl font-bold">Time:{time.currentTime}</h4>
      <AboutContent />
    </div>
  );
}

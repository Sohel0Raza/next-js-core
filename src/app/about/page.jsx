import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: {
    absolute: "About Us",
  },
  description: "About Us page",
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
 
  const data = await res.json();
  return data.currentTime;
};

export default async function Page() {
  const time = await getData();
  return (
    <div className="md:py-24 h-screen text-center ">
      <h2 className="text-xl font-semibold mb-5">About Us</h2>
      <h4 className="text-2xl font-bold">Time:{time}</h4>
      <AboutContent />
    </div>
  );
}
